export default  {
    delay:100,
    loaded:"loaded",

    addLoadedClass:function(){
        
        setTimeout(() => {
            document.body.classList.add(this.loaded);
        }, this.delay);
    }
}
