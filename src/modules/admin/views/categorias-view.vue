<template>
  <div>
    <button class="text-blue-500 underline py-2 px-4 rounded" @click="showModal = true">+ Añadir imagen</button>
    
    <modal :show-modal="showModal"  @update:showModal="showModal = $event">
        <!-- Tab navigation -->
        <div class="border-b border-gray-200">
                <nav class="-mb-px flex">
                <a :class="{'border-blue-500 text-blue-600': activeTab === 'dropzone', 'border-gray-200': activeTab !== 'dropzone'}" class="w-1/2 py-4 px-6 border-b-2 font-medium text-sm" href="#" @click.prevent="activeTab = 'dropzone'">Dropzone</a>
                <a :class="{'border-blue-500 text-blue-600': activeTab === 'image-save', 'border-gray-200': activeTab !== 'image-save'}" class="w-1/2 py-4 px-6 border-b-2 font-medium text-sm" href="#" @click.prevent="activeTab = 'image-save'">Image Save</a>
                </nav>
            </div>
            <!-- Tab content -->
            <div class="p-6">
                <div v-if="activeTab === 'dropzone'">
                <div class="flex justify-center items-center h-80 border-2 border-gray-400 border-dashed rounded-lg dropzone" v-bind="getRootProps()">
                    <input v-bind="getInputProps()" />
                    <div class="space-y-1 text-center">
                    <h3 class="text-lg leading-6 font-medium text-gray-900">Drop files here or click to upload</h3>
                    <p class="text-sm text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </div>
                </div>
                </div>
                <div v-if="activeTab === 'image-save'" class="flex">
                    <div class="overflow-y-auto h-[500px] w-[70%]">
                    <div v-if="files.length > 0" class="files">
                        <div class="file-item" v-for="(file, index) in files" :key="index" @click="selectedImage = index">
                        <img :src="file.preview" class="object-cover cursor-pointer"  />
                        <span class="delete-file" @click="handleClickDeleteFile(index)">Delete</span>
                        </div>
                    </div>
                    <!--Images-->
                    <div v-if="files.length === 0">
                        <h3 class="text-lg leading-6 font-medium text-gray-900">Image Save</h3>
                        <p class="mt-2 text-sm text-gray-500">Here's where the uploaded image will be displayed.</p>
                    </div>
                    </div>
                    <div v-if="files.length > 0" class="bg-gray-100 w-[500px] p-4">
                    <h3 class="text-lg leading-6 font-medium text-gray-900">Image Detail</h3>
                      <div class="mt-4">
                          <img :src="files[selectedImage].preview" class="object-contain max-h-[300px] mx-auto" />
                          <p class="mt-4 text-sm text-gray-500">{{ files[selectedImage].name }}</p>
                          <p class="mt-4 text-sm text-gray-500">{{ files[selectedImage].size }}</p>
                          <p class="mt-4 text-sm text-gray-500">{{ files[selectedImage].type }}</p>
                      </div>
                      <div class="mt-4">
                        <button class="bg-gray-300 px-2 py-1 rounded-lg w-full">Agregar imagen al producto</button>
                      </div>
                    </div>
                </div>
            <!--Image-Save Tab-->
        </div>
    </modal>
    
  </div>
</template>

<script setup lang="ts">

import { ref } from 'vue';

import Modal from '../components/Modal.vue';
import { useDropzone } from 'vue3-dropzone';

const showModal = ref(false)

interface FileItem {
  name: string;
  size: number;
  type: string;
  lastModified: number;
  preview: string;
}

const activeTab = ref('dropzone')
const files = ref<FileItem[]>([]);
const selectedImage = ref<number >( 0 )

const { getRootProps, getInputProps, isDragActive } = useDropzone({
  async onDrop(acceptedFiles) {
    const newFiles: FileItem[] = [];

    for (const file of acceptedFiles) {
      if (file.type.startsWith('image/')) {
        try {
          const preview = await createBlobUrl(file);
          newFiles.push({
            name: file.name,
            size: file.size,
            type: file.type,
            lastModified: file.lastModified,
            preview,
          });
          activeTab.value = 'image-save'
        } catch (error) {
          console.error(error);
        }
      }
    }

    files.value = [...files.value, ...newFiles];
  },
});

const createBlobUrl = async (file: File): Promise<string> =>{
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      resolve(reader.result as string);
    };
    reader.onerror = (error) => {
      reject(error);
    };
  });
}

const handleClickDeleteFile = (index: number) => {
  const file = files.value[index];
  URL.revokeObjectURL(file.preview);
  files.value.splice(index, 1);
}



</script>





<style scoped>
.dropzone {
  border: 2px dashed #ccc;
  border-radius: 5px;
  padding: 20px;
  text-align: center;
}

.dropzone.isDragActive {
  border-color: green;
}

.files {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.file-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 200px;
}

.file-item img {
  width: 100%;
  height: auto;
}

.delete-file {
  color: red;
  cursor: pointer;
}
</style>
