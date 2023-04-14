import apiStrapi from "@/api/apiStrapi";
import { ref } from "vue";








const useAtributo = () => {
    
    //State
    const isLoading     = ref( false )
    let atributes       = ref<any>([])
    let msg             = ref<any>()
    const showAlert     = ref(false)
    let timeoutId       = ref<any>();
    const formPrice     = ref({ price: '', discount: '' })
    const alertMsg      = ref<any>({ price: '', discount: '' })
    const alertVisible  = ref<any>({ price: '', discount: '' })
    //Methods
    const  createAtribute = async () =>{
        try {
          isLoading.value = true
          const { data } = await apiStrapi.post('/variacion');
          const { id } = data[0]
          atributes.value.push({nombre: '', valores: '', id , estado: false})
        } catch (error) {
          console.log( error )
          msg.value = error
        } finally {
          isLoading.value = false
        }
    }
    const updateAtribute = async () => {
        try {
          isLoading.value = true
          const { data } = await apiStrapi.put('/variacion', atributes.value )
          // If the response data is an array, update the atributes.value with it
          if(data.msg){
            showAlert.value = true
            msg.value = data.msg 
            clearTimeout(timeoutId.value); // Clear any existing timeout
            timeoutId.value = setTimeout(() => {
              msg.value = '';
              showAlert.value = false
            }, 3000); 
            return 
          }
          atributes.value = data;
        } catch (error) {
          console.log(error)
        } finally{
          isLoading.value = false
        }
    }
    const deleteAtribute = async( id: any) => {
        try {
          isLoading.value = true
          await apiStrapi.delete(`/variacion/${id}`);
          atributes.value = atributes.value.filter( ( atributo: any )  => atributo.id !== id )
        } catch (error) {
          msg.value = error
          console.log( error )
        } finally {
          isLoading.value = false
        }
      
    }
    const getAttributes = async() => {
        try {
          isLoading.value = true
          const {data} = await apiStrapi.get('/variacion')
          atributes.value = data
        } catch (error) {
          msg.value = error
          console.log(error)
        } finally{
          isLoading.value = false
        }
    } 
    const addPrice = (field: string) => {
        const price = field === 'price' ? formPrice.value.price : formPrice.value.discount;
        const regex = /^\d+(\.\d+)?$/;
        if (!price) {
          alertMsg.value[field] = '';
        } else if (!regex.test(price)) {
          alertMsg.value[field] = `Precio ${field} invalido`;
        } else {
          alertMsg.value[field] = '';
        }
      
        if (field === 'discount' && Number(formPrice.value.discount) >= Number(formPrice.value.price)) {
          alertMsg.value[field] = `El precio de descuento debe ser menor al precio regular`;
        }
      
        // check if the alert is invalid and keep it visible
        if (alertMsg.value[field] && !alertVisible.value[field]) {
          alertVisible.value[field] = true;
        }
      
        // set a timeout to hide the alert after 2 seconds if the input is valid
        if (!alertMsg.value[field] && alertVisible.value[field]) {
          setTimeout(() => {
            alertVisible.value[field] = false;
          }, 2000);
        }
    };
    return {
        addPrice,
        createAtribute,
        updateAtribute,
        deleteAtribute,
        getAttributes,
        isLoading ,   
        atributes,       
        msg,      
        showAlert, 
        timeoutId,    
        formPrice,  
        alertMsg, 
        alertVisible, 
    }
}

export default useAtributo