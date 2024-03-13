let Names=["ANNAMALAI","GOWTHAMI","Sathish","Neha","Tamilselvan","manoj"];

var inserting=()=>
{
    let temp=document.getElementById('users')
    Names.push(temp.value);
    alert("your value is added successfully"+temp.value)
    
}

let viewpoint=()=>
{
    let hi="";
    Names.map((data)=>
    {
        hi+="<tr><td>"+data+"</td></tr>"
    })
    const performance=document.getElementById('live');
    performance.innerHTML="<table align='center' style='padding: 10px 10px 5px 10px; box-shadow:5px 6px 4px pink;'><thead><tr><th>  Names</th></tr></thead><tbody>"+hi+"</tbody></table>"
}

let updating=()=>
{
    let index=document.getElementById('users').value
    const newone=prompt("Tell us what value you want update/replace"+Names[index])
    Names[index]=newone;
}

var deleting=()=>
{
    let temp=document.getElementById('users').value
    Names=Names.filter((data)=>
    { 
        return data!==temp;
    })
    alert('value is deleted')
}