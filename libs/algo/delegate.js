(() => {
    const delegate = (parent,selector,type,handle) => {

        parent.addEventListener(type, e => {
            let el = e.target

            while(!el.localName === selector){
                if(el === parent){
                    el = null;
                    break;
                }

                el = el.parentElement
            }

            if(el){
                handle.apply(el)
            }
        })


    }

    function changeColor () {
        if(this.classList.contains('active')){
            this.classList.remove('active')
        }else{
            this.classList.add('active');
        }
    }

    const parent = document.getElementById("parent");

    delegate(parent,"li","click",changeColor)
})()