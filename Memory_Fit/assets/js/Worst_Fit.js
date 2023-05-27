const num_hole=document.getElementById("hole_count")
const submit_num_hole=document.getElementById("go");
const add_new=document.getElementById("new_field");

submit_num_hole.addEventListener("click",(event)=>{
    event.preventDefault(); 
    print_num();
});

function print_num(){
    const num_holes=num_hole.value;
    for(let i=1;i<=num_holes;i++){
        const adding_new = `<input type="number" class="form-control" id="hole_count_new_${i}" name="input" placeholder="Hole Size of Number ${i}">`;
        add_new.innerHTML+=adding_new;
    }
    submit_num_hole.disabled = true;
    
    document.getElementById("cal_fun").style.display="block";
    document.getElementById("Allocate_field").style.display="block";
    add_new.style.backgroundColor="lightcoral";
    
}

const num_file=document.getElementById("File_count");
const submit_file_count=document.getElementById("File_set");
const show_Aloc_field=document.getElementById("show_Aloc");

submit_file_count.addEventListener("click",(event)=>{
    event.preventDefault(); 
    print_file();
    
});

function print_file(){
    const num_files=num_file.value;
    for(let i=1;i<=num_files;i++){
        const adding_file = `<input type="number" class="form-control" id="file_count_new_${i}" name="input" placeholder="File Size ${i}">`;
        show_Aloc_field.innerHTML+=adding_file; 
    }
    document.getElementById("cal_fun").disabled=true;
    document.getElementById("calculate_Aloc").style.display="block";
    document.getElementById("calculate_Aloc").style.display="flex";
    show_Aloc_field.style.backgroundColor="lightcoral";
    submit_file_count.disabled="true";
    
}

const Avail_Mem=[];
const Avail_before=[];
const file_Mem=[];
const Mem_check=[];

const show_recent=document.getElementById("showing_Avail_res");
const show_files_recent=document.getElementById("Set_Aloc_val");
function store_avail(){
    show_recent.innerHTML+=`<div>Showing Available space in holes:</div>`;
    const num_holes=num_hole.value;
    for(let i=1;i<=num_holes;i++)
    {
        const val_push=document.getElementById(`hole_count_new_${i}`).value;
        Avail_Mem.push(val_push);
        Avail_before.push(val_push);
        Mem_check.push(0);
        show_recent.innerHTML+=`<div>${Avail_Mem[i-1]}</div>`;
    }
}

const show_values=document.getElementById("cal_fun");
show_values.addEventListener("click",(event)=>{
    store_avail();
})

show_files_recent.addEventListener("click",(event)=>{
    store_file();
    inner_cal();
})
const show_file=document.getElementById("showing_store_res");
function store_file(){
    
    show_file.innerHTML+=`<div>Showing files to be stored:</div>`;
    const num_files=num_file.value;
    for(let i=1;i<=num_files;i++)
    {
        const val_push=document.getElementById(`file_count_new_${i}`).value;
        file_Mem.push(val_push);
        show_file.innerHTML+=`<div>${file_Mem[i-1]}</div>`;
    }
}

function inner_cal() {
    Avail_Mem.sort((a, b) => b - a);
    Avail_before.sort((a, b) =>b - a)
    
    show_recent.innerHTML= '<p>The holes are represented in this order:<p>';
    for (let i = 0; i < Avail_Mem.length; i++) {
    show_recent.innerHTML+= `<p>Hole${i + 1}: ${Avail_Mem[i]}</p>`;
    }
    

    const printme = document.getElementById("this_is_it");
    for (let i = 0; i < file_Mem.length; i++) {
        let flag = 0;
        for (let j = 0; j < Avail_Mem.length; j++) {
            if (parseInt(Avail_Mem[j]) >= parseInt(file_Mem[i]) && Mem_check[j] === 0) {
                flag = 1;
                printme.innerHTML += `<div>---File ${i + 1} is stored in Hole ${j + 1}</div>`;
                Avail_Mem[j] -= file_Mem[i];
                Mem_check[j] = 1;
                break;
            }

            

            else if(Mem_check[j] === 1)
            {
                printme.innerHTML += `<div>File ${i + 1} cannot be stored in Hole ${j + 1} as Hole ${j} is already used by another File</div>`;
            }

            else(parseInt(Avail_Mem[j]) < parseInt(file_Mem[i]))
            {
                printme.innerHTML += `<div>File ${i + 1} cannot be stored in Hole ${j + 1} as File ${i+1} size  is less than that of Hole ${j}</div>`;
            }
            
        }
        if (flag === 0) {
            printme.innerHTML += `<div>---File ${i + 1} not allocated in any Hole</div>`;
        }
    }

    for(let i=0;i<Avail_Mem.length;i++)
    {
        const finalprinter=document.getElementById("final_output");
        if(parseFloat((parseInt(Avail_Mem[i])/parseInt(Avail_before[i])))===0)
        {
            finalprinter.innerHTML+=`<div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="${parseFloat((parseInt(Avail_Mem[i])/parseInt(Avail_before[i])))*100}" aria-valuemin="0" aria-valuemax="100" style="width:25%;margin:20px;background-color:red;color:white">
            <div class="progress-bar" style="width:${parseFloat((parseInt(Avail_Mem[i])/parseInt(Avail_before[i])))*100}%">100%</div>
            </div>`;
        }
        
        else
        finalprinter.innerHTML+=`<div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="${parseFloat((parseInt(Avail_Mem[i])/parseInt(Avail_before[i])))*100}" aria-valuemin="0" aria-valuemax="100" style="width:25%;margin:20px">
            <div class="progress-bar" style="width:${parseFloat(((parseInt(Avail_before[i])-parseInt(Avail_Mem[i]))/parseInt(Avail_before[i])))*100}%"></div>
            </div>`;

      finalprinter.innerHTML+=`<div>Hole${i+1} ---${parseInt(Avail_Mem[i])} out of ${parseInt(Avail_before[i])} left</div>`;
      
    }
    document.getElementById("Set_Aloc_val").disabled=true;
}

