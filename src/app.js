const Utils = { 

    parseRequestURL : () => {

        let url = location.hash.slice(1).toLowerCase() || '/';
        let r = url.split("/")
        let request = {
            resource    : null,
            id          : null,
            verb        : null
        }
        request.resource    = r[1]
        request.id          = r[2]
        request.verb        = r[3]

        return request
    }


    , sleep: (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

let Bottombar = {
    render: async () => {
        let view =  /*html*/`
        <footer class="footer">
            <div class="content has-text-centered">
                <p>
                    This is my foot. There are many like it, but this one is mine.
                </p>
            </div>
        </footer>
        `
        return view
    },
    after_render: async () => { }

}

let Navbar = {
    render: async () => {
        let view =  /*html*/`
             <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="container">
                    <div class="navbar-brand">
                        <a class="navbar-item" href="#/">
                            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
                        </a>
                        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>
                    <div id="navbarBasicExample" class="navbar-menu is-active" aria-expanded="false">
                        <div class="navbar-start">
                            <a class="navbar-item" href="#/">
                                Home
                            </a>
                            <a class="navbar-item" href="#/about">
                                About
                            </a>
                            <a class="navbar-item" href="#/secret">
                                Secret
                            </a>
                        </div>
                        <div class="navbar-end">
                            <div class="navbar-item">
                                <div class="buttons">
                                    <a class="button is-primary" href="#/register">
                                        <strong>Sign up</strong>
                                    </a>
                                    <a class="button is-light" href="#/login">
                                        Log in
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        `
        return view
    },
    after_render: async () => { }

}

let LogIn={
    render : async () => {
        let view =  /*html*/`
        <section class="section">
        <div class="field">
            <p class="control has-icons-left has-icons-right">
                <input class="input" id="email_input" type="email" placeholder="Enter your Email">
                <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                </span>
                <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                </span>
            </p>
        </div>
        <div class="field">
            <p class="control has-icons-left">
                <input class="input" id="pass_input" type="password" placeholder="Enter a Password">
                <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                </span>
            </p>
        </div>
        <div class="field">
            <p class="control">
                <button class="button is-primary" id="login_submit_btn">
                    log in
                </button>
             </p>
        </div>
        </section>
        
        `
        return view
    },
    after_render: async () => {
        document.getElementById("login_submit_btn").addEventListener ("click",  () => {
            let email       = document.getElementById("email_input");
            let pass        = document.getElementById("pass_input");
            if (email.value =='' | pass.value == '' ) {
                alert (`The fields cannot be empty`)
            } 
            else {
                alert(`logged in`)
                location.href='#/'
                logged=true;
            }    
        })
        
    }
        
}


let About = {
    render : async () => {
        let view =  /*html*/`
            <section class="section">
                <h1> About </h1>
            </section>
        `
        return view
    },
    after_render: async () => {}
        
}

let logged=false;

let Modify ={
    render : async () => {
        let view =  /*html*/`
        <section class="section">
        <div class="field">
            <p class="control has-icons-left has-icons-right">
                <input class="input" id="PostId" Type="text">
                <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                </span>
                <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                </span>
            </p>
        </div>
        <div class="field">
            <p class="control has-icons-left">
                <input class="input" id="PostTitle" Type="text" >
                <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                </span>
            </p>
        </div>
        <div class="field">
            <p class="control has-icons-left">
                <input class="input" id="PostContent" Type="text" >
                <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                </span>
            </p>
        </div>
        <div class="field">
            <p class="control has-icons-left">
                <input class="input" id="PostAuthor"  Type="text">
                <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                </span>
            </p>
        </div>
        <div class="field">
            <p class="control">
                <button class="button is-primary" id="modify">
                update
                </button>
            </p>
        </div>
    </section>
`
        return view
    },
    after_render: async () => {
        let id       = document.getElementById("PostId");
        let title        = document.getElementById("PostTitle");
        let content  = document.getElementById("PostContent");
        let author  = document.getElementById("PostAuthor");
        id.value=postData["Id"]
        title.value=postData["Title"]
        content.value=postData["Content"]
        author.value=postData["Author"]
        document.getElementById("modify").addEventListener ("click",  () => {
            
            if (id.value =='' | title.value == '' | content.value == '' | author.value=='') {
                alert (`The fields cannot be empty`)
            } 
            else {
                alert(`updated`)
                location.href='#/'
            }    
        })


    }
}

let Error404 = {

    render : async () => {
        let view =  /*html*/`
            <section class="section">
                <h1> 404 Error </h1>
            </section>
        `
        return view
    }
    , after_render: async () => {
    }
}

let getPostsList = async () => {
    const options = {
       method: 'GET',
       headers: {
           'Content-Type': 'application/json'
       }
   };
   try {
       const response = await fetch(`https://5bb634f6695f8d001496c082.mockapi.io/api/posts`, options)
       const json = await response.json();
       // console.log(json)
       return json
   } catch (err) {
       console.log('Error getting documents', err)
   }
}

let Home = {
   render : async () => {
       let posts = await getPostsList()
       let view =  /*html*/`
           <section class="section">
               <h1> Home </h1>
               <ul>
                   ${ posts.map(post => 
                       /*html*/`<li><a href="#/p/${post.id}">${post.title}</a></li>`
                       ).join('\n ')
                   }
               </ul>
           </section>
       `
       return view
   }
   , after_render: async () => {
   }

}

let getPost = async (id) => {
    const options = {
       method: 'GET',
       headers: {
           'Content-Type': 'application/json'
       }
   };
   try {
       const response = await fetch(`https://5bb634f6695f8d001496c082.mockapi.io/api/posts/` + id, options)
       const json = await response.json();
       // console.log(json)
       return json
   } catch (err) {
       console.log('Error getting documents', err)
   }
}

let postData ={
    "Id": "",
    "Title": "",
    "Content": "",
    "Author": "",

}

let currentPost=null;

let PostShow = {

    render : async () => {
        let request = Utils.parseRequestURL()
        let post = await getPost(request.id)
        currentPost=post

        return /*html*/`
            <section class="section">
                <h1> Post Id : ${post.id}</h1>
                <p> Post Title : ${post.title} </p>
                <p> Post Content : ${post.content} </p>
                <p> Post Author : ${post.name} </p>
                <p class="control">
                <a class="button is-light" id="veriModify">
                    modify
                </a>
                </p>
            </section>
        `
    }
    , after_render: async () => {
        document.getElementById("veriModify").addEventListener("click", ()=>{

            if(logged){
                postData["Id"]=currentPost.id
                postData["Title"]=currentPost.title
                postData["Content"]=currentPost.content
                postData["Author"]=currentPost.name
                location.href="#/modify"
            }else{
                alert(`must be logged in`)
            }
        })
    }
}

let Register = {

    render: async () => {
        return /*html*/ `
            <section class="section">
                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        <input class="input" id="email_input" type="email" placeholder="Enter your Email">
                        <span class="icon is-small is-left">
                            <i class="fas fa-envelope"></i>
                        </span>
                        <span class="icon is-small is-right">
                            <i class="fas fa-check"></i>
                        </span>
                    </p>
                </div>
                <div class="field">
                    <p class="control has-icons-left">
                        <input class="input" id="pass_input" type="password" placeholder="Enter a Password">
                        <span class="icon is-small is-left">
                            <i class="fas fa-lock"></i>
                        </span>
                    </p>
                </div>
                <div class="field">
                    <p class="control has-icons-left">
                        <input class="input" id="repeat_pass_input" type="password" placeholder="Enter the same Password again">
                        <span class="icon is-small is-left">
                            <i class="fas fa-lock"></i>
                        </span>
                    </p>
                </div>
                <div class="field">
                    <p class="control">
                        <button class="button is-primary" id="register_submit_btn">
                        Register
                        </button>
                    </p>
                </div>
            </section>
        `
    }

    , after_render: async () => {
        document.getElementById("register_submit_btn").addEventListener ("click",  () => {
            let email       = document.getElementById("email_input");
            let pass        = document.getElementById("pass_input");
            let repeatPass  = document.getElementById("repeat_pass_input");
            if (pass.value != repeatPass.value) {
                alert (`The passwords dont match`)
            } else if (email.value =='' | pass.value == '' | repeatPass == '') {
                alert (`The fields cannot be empty`)
            } 
            else {
                alert(`User with email ${email.value} was successfully submitted!`)
            }    
        })
    }
}

const routes = {
    '/'             : Home
    , '/about'      : About
    , '/p/:id'      : PostShow
    , '/register'   : Register
    , '/login'      : LogIn
    , '/modify'     : Modify
};



const router = async () => {


    const header = null || document.getElementById('header_container');
    const content = null || document.getElementById('page_container');
    const footer = null || document.getElementById('footer_container');
    

    header.innerHTML = await Navbar.render();
    await Navbar.after_render();
    footer.innerHTML = await Bottombar.render();
    await Bottombar.after_render();


   
    let request = Utils.parseRequestURL()


    let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')
    

    let page = routes[parsedURL] ? routes[parsedURL] : Error404
    content.innerHTML = await page.render();
    await page.after_render();
  
}


window.addEventListener('hashchange', router);


window.addEventListener('load', router);