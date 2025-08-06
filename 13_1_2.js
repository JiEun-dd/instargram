document.addEventListener("DOMContentLoaded",
    function(e){
        document.addEventListener("keydown",
            function(e){
                console.log(e.key)
                if (e.key === "q"){
                    alert("this is Q!")
                }
            }
        )
    
        let change = document.querySelector("#change")
        change.addEventListener("change",
            function(e){
                console.log(e.target.value)
            }
        )

        let input = document.querySelector("#input")
        input.addEventListener("input",
            function(e){
                console.log(e.target.value)
            }
        )
    }
)