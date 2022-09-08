/*TODO:
+ 1. add JS script defer in the head
+ 2. find textarea, fileNameInput, selectMenu and saveBtn
+ 3. read Common MIME types -> set select options as MIME Type
4. read Blob -> create Blob object
5. create object URL
6. create link with url and download attributes by providing
the file name and the file content.
7. add event listener when the dropdown changes to change
the button name
8. disable the button if the textarea is empty ->
8.1 add the attribute required for the textarea
8.2 with opacity and pointer-events apply appropriate styles
for the button
8.3 with the pseudo class valid change the button styles based
on textarea changes
*/

const textarea = document.querySelector('textarea');
const fileName = document.querySelector('.file-name');
const selectMenu = document.querySelector('.file-options');
const saveBtn = document.querySelector('.save-btn');

saveBtn.addEventListener('click', () => {
    let fileData = textarea.value;
    let fileType = selectMenu.options[selectMenu.selectedIndex].value;

    let blob = new Blob(fileData, { type: fileType })
    let url = URL.createObjectURL(blob);
    let link = document.createElement('a');
    link.url = url;
    link.download();

})


