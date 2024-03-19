const tempInput = document.getElementById("tempInput")
            const CtoF = document.getElementById("CtoF")
            const FtoC = document.getElementById("FtoC")
            const myButton = document.getElementById("myButton")
            const result = document.getElementById("result")

            function convert(){
                if(CtoF.checked){
                    let c = Number(tempInput.value);
                    let f = c * 9 / 5 + 32;
                    result.textContent = f.toFixed(1) + "°F";
                }
                else if(FtoC.checked){
                    let f = Number(tempInput.value);
                    let c = (f-32) * (5/9);
                    console.log(c.toFixed(2) + "C");
                    result.textContent = c.toFixed(2) + "°C";

                }
                else{
                    result.textContent = "Select a Unit!";
                }
            }
