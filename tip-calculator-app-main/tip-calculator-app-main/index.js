const billInput = document.querySelector("#billInput");
const tipPercent = document.querySelectorAll("#buttons");
const tipOutputed = document.querySelector("#tipOutput");
const peopleNumber = document.querySelector("#numberPeople");
const totalOutput = document.querySelector("#totalOutput");
const resetting = document.querySelector('#resetting');



// tipPercent.addEventListener("click", function(e) {
//     console.log("This is a monkey");

resetting.addEventListener("click", e => {
    console.log("Are you madd");
})

    for(i = 0; i < tipPercent.length; i++){
        tipPercent[i].addEventListener("click", percentage);
        function percentage(){
            prayer = this.value;
            if(prayer === '5'){
                const zoom = billInput.value / peopleNumber.value;
                const sheph =  (prayer / 100) * zoom;
                const result = sheph.toFixed(2);
                const stat = Number(zoom + sheph);
                const move = stat.toFixed(2);
                tipOutputed.innerHTML = "$" + result;
                totalOutput.innerHTML = "$" + move;
            }
            else if(prayer === '10'){
                const zoom = billInput.value / peopleNumber.value;
                const sheph =  (prayer / 100) * zoom;
                const result = sheph.toFixed(2);
                const stat = zoom + sheph;
                const move = stat.toFixed(2);
                tipOutputed.innerHTML = "$" + result;
                totalOutput.innerHTML = "$" + move;
            }
            else if(prayer === '15'){
                const zoom = billInput.value / peopleNumber.value;
                const sheph =  (prayer / 100) * zoom;
                const result = sheph.toFixed(2);
                const stat = zoom + sheph;
                const move = stat.toFixed(2);
                tipOutputed.innerHTML = "$" + result;
                totalOutput.innerHTML = "$" + move;

            }
            else if(prayer === '25'){
                const zoom = billInput.value / peopleNumber.value;
                const sheph =  (prayer / 100) * zoom;
                const result = sheph.toFixed(2);
                const stat = zoom + sheph;
                const move = stat.toFixed(2);
                tipOutputed.innerHTML = "$" + result;
                totalOutput.innerHTML = "$" + move;

            }
            else if(prayer === '50'){
                const zoom = billInput.value / peopleNumber.value;
                const sheph =  (prayer / 100) * zoom;
                const result = sheph.toFixed(2);
                const stat = zoom + sheph;
                const move = stat.toFixed(2);
                tipOutputed.textContent = "$" + result;
                totalOutput.textContent = "$" + move;

            }
            else{
                
            }
        }
    }
    const selection = document.querySelector('#select');
    tipPercent.forEach(button => {
        button.addEventListener("click", function(){
            selection.querySelector('.active').classList.remove('active');
            button.classList.add('active');
        });
    });


    resetting.addEventListener("click", removing);
    function removing(){
        billInput.value = "";
        peopleNumber.value = "";
        tipOutputed.innerHTML = "$" + "0.00";
        totalOutput.innerHTML = "$" + "0.00";
    }
    
