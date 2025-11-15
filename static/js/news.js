let news_div = document.getElementById('news');

for(let i=0; i<5 && i<posts.length; i++){
    add_post(news_div, posts[i]);
}