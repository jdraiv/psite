

function Editor(quillObject) {
    let toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],     
        ['blockquote', 'code-block'],
      
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'direction': 'rtl' }],                         
      
        [{ 'color': [] }, { 'background': [] }],          
        [{ 'align': [] }],
        [{ 'font': [] }],
        [{ 'size': ['small', false, 'large', 'huge'] }], 
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        ['clean']                                      
    ];

    this.quillObject = quillObject;

    this.editor = new this.quillObject('#editor', {
        theme: 'snow',
        placeholder: 'Of all that is written, I love only what a man has written with his own blood.',
        modules: {
            toolbar: toolbarOptions
        }
    });

    this.postData = (() => {        
        let editorData = {
            content: this.editor.root.innerHTML,
            title: document.getElementById('essay-title').value,
            image: document.getElementById('image').value,
            key: document.getElementById('key').value
        };

        fetch('/post_essay', {
            method: 'POST',
            header: new Headers(),
            body: JSON.stringify(editorData),
        }).then((response) => {
            return response.json()
        }).then((editorData) => {
            console.log(editorData);
        })
    });

    this.setup = (() => {
        let submitBtn = document.createElement('button');
        submitBtn.type = 'submit';
        submitBtn.innerHTML = "Post";
        submitBtn.id = 'post-btn';
        submitBtn.onclick = (() => {this.postData()})

        document.getElementById('post-btn-container').appendChild(submitBtn);

        console.log("Submit button has been mounted successfully");
    });
}

