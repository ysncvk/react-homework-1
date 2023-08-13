import axios from "axios";

async function getData (number) {

    let {data:user} = await axios("https://jsonplaceholder.typicode.com/users/"+number);
    
    let {data:post} = await axios("https://jsonplaceholder.typicode.com/posts?id="+number);

    user.posts = post;

   console.log(user)

}

export  default getData;