const app = Vue.createApp({
    data(){
        return {
         counter: null,
         inputValue: null,
        };
    },
    methods:{
        add(inputValue){
            inputValue = document.querySelector('input').value;
            this.counter = Number(this.counter) + Number(inputValue);
            document.querySelector('input').value = "";
            
        },
        reduce(inputValue){
            inputValue = document.querySelector('input').value;
            this.counter = Number(this.counter) - Number(inputValue);
            document.querySelector('input').value = "";
            
        }
    }
})


app.mount('#events')