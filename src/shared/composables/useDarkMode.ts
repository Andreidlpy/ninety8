import { ref } from 'vue';


if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
} else {
    document.documentElement.classList.remove('dark')
}
  
const useDarkMode = ( ) => {
    
    const toggleDarkMode = ref( document.documentElement.className === 'dark')

    const changeDarkMode = () => {
        toggleDarkMode.value = document.documentElement.classList.toggle('dark');
        toggleDarkMode.value ? localStorage.theme = 'dark' : localStorage.theme = 'light'
    }
  return {
    changeDarkMode,
    toggleDarkMode
  }
}

export default useDarkMode;