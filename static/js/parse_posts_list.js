function add_post(root, post){
    let article = document.createElement('article');
    let article_anchor = document.createElement('a');
    let article_title = document.createElement('h1');
    let article_description = document.createElement('h3');
    let article_date = document.createElement('b');
    let article_tags = document.createElement('b');
    let article_date_icon = document.createElement('i');
    let article_tags_icon = document.createElement('i');

    let article_footer = document.createElement('footer');

    let br = document.createElement('br');
    let br2 = document.createElement('br');

    article.className = "news_article";

    article_title.className = "news_title";
    article_description.className = "news_description";
    article_date.className = "news_date";
    article_tags.className = "news_tags";
    article_date_icon.className = "fa-regular fa-calendar";
    article_tags_icon.className = "fa-solid fa-tags";
    article_footer.className = "news_footer";

    console.log(article_date_icon);

    article_title.textContent = post['title'];
    article_description.textContent = post['description'];
    article_date.textContent = " " + post['date'];
    article_tags.textContent = " " + post['tags'].join(", ");
    article_anchor.href = post['href'];

    article_footer.appendChild(article_date_icon);
    article_footer.appendChild(article_date);
    article_footer.appendChild(br);
    article_footer.appendChild(br2);
    article_footer.appendChild(article_tags_icon);
    article_footer.appendChild(article_tags);
    article_anchor.appendChild(article_title);
    article_anchor.appendChild(article_description);
    article_anchor.appendChild(article_footer);

    article.appendChild(article_anchor);
    root.appendChild(article);
}
