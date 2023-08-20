let childCount =  0;
function addItemsInDiv(clickedElementId, divIdWhereAdd, idWhatAdd ){
    const whereAdd = document.getElementById(divIdWhereAdd);
    
    const whatAdd = document.getElementById(idWhatAdd).innerText;

    document.getElementById(clickedElementId).addEventListener('click', function(){
        const newElement = document.createElement('p');
        newElement.innerHTML = `
        ${childCount+1} . ${whatAdd}
    `;
    newElement.classList.add('text-2xl')
    newElement.classList.add('font-medium')
    newElement.classList.add('mb-4')
    const hiddenHr = document.getElementById('hidden-hr');
    hiddenHr.classList.remove('hidden');

    whereAdd.appendChild(newElement);
    childCount++;
    });  
}