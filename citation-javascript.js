function mlaWeb() {
    var authorFirst = document.getElementById("first").value;
    var authorLast = document.getElementById("last").value;
    var article = document.getElementById("article-title").value;
    var date = document.getElementById("date").value;
    var website = document.getElementById("website-title").value;
    var link = document.getElementById("url").value;

    if (authorFirst.trim() === "" || authorLast.trim() === "" || article.trim() === "" 
    || date.trim() === "" || website.trim() === "" || link.trim() === "") {
        alert("Please fill in all required fields.");
        return;
    }

    let citation = `${authorLast}, ${authorFirst}. "${article}." <i>${website}</i>. ${date}, ${link}.`

    document.getElementById("mla-web-citation").innerHTML = citation;
}

function mlaJournal() {
    var authorFirst = document.getElementById("first").value;
    var authorLast = document.getElementById("last").value;
    var article = document.getElementById("article-title").value;
    var journal = document.getElementById("journal-title").value;
    var volume = document.getElementById("volume").value;
    var issue = document.getElementById("issue").value;
    var year = document.getElementById("date").value;
    var pages = document.getElementById("pages").value;
    var doi = document.getElementById("url").value;

    if (authorFirst.trim() === "" || authorLast.trim() === "" || article.trim() === "" 
    || year.trim() === "" || journal.trim() === "" || doi.trim() === ""
    || volume.trim() === "" || issue.trim() === "" || pages.trim() === "") {
        alert("Please fill in all required fields.");
        return;
    }

    let citation = `${authorLast}, ${authorFirst}. "${article}." <i>${journal}</i>, vol. ${volume}, no. ${issue}, ${year}, pp. ${pages}. ${doi}.`

    document.getElementById("mla-journal-citation").innerHTML = citation;
}

function mlaBook() {
    var authorFirst = document.getElementById("first").value;
    var authorLast = document.getElementById("last").value;
    var book = document.getElementById("article-title").value;
    var publisher = document.getElementById("publisher").value
    var year = document.getElementById("date").value;
    var pages = document.getElementById("pages").value;

    if (authorFirst.trim() === "" || authorLast.trim() === "" || book.trim() === "" 
    || publisher.trim() === "" || year.trim() === "" || pages.trim() === "") {
        alert("Please fill in all required fields.");
        return;
    }

    let citation = `${authorLast}, ${authorFirst}. <i>${book}</i>. ${publisher}, ${year}, pp. ${pages}.`

    document.getElementById("mla-book-citation").innerHTML = citation;
}

function apaWeb() {
    var authorFirst = document.getElementById("first").value[0];
    var authorLast = document.getElementById("last").value;
    var art = document.getElementById("article-title").value;
    var article = art.slice(0, 1).toUpperCase() + art.slice(1).toLowerCase();
    var date = document.getElementById("date").value;
    var website = document.getElementById("website-title").value;
    var link = document.getElementById("url").value;

    if (authorFirst.trim() === "" || authorLast.trim() === "" || article.trim() === "" 
    || date.trim() === "" || website.trim() === "" || link.trim() === "") {
        alert("Please fill in all required fields.");
        return;
    }

    let citation = `${authorLast}, ${authorFirst}. (${date}). ${article}. <i>${website}</i>. ${link}`

    document.getElementById("apa-web-citation").innerHTML = citation;
}

function apaJournal() {
    var authorFirst = document.getElementById("first").value[0];
    var authorLast = document.getElementById("last").value;
    var art = document.getElementById("article-title").value;
    var article = art.slice(0, 1).toUpperCase() + art.slice(1).toLowerCase();
    var journal = document.getElementById("journal-title").value;
    var volume = document.getElementById("volume").value;
    var issue = document.getElementById("issue").value;
    var year = document.getElementById("date").value;
    var pages = document.getElementById("pages").value;
    var doi = document.getElementById("url").value;

    if (authorFirst.trim() === "" || authorLast.trim() === "" || article.trim() === "" 
    || year.trim() === "" || journal.trim() === "" || doi.trim() === ""
    || volume.trim() === "" || issue.trim() === "" || pages.trim() === "") {
        alert("Please fill in all required fields.");
        return;
    }

    let citation = `${authorLast}, ${authorFirst}. (${year}). ${article}. <i>${journal}, ${volume}</i>(${issue}), ${pages}, ${doi}`

    document.getElementById("apa-journal-citation").innerHTML = citation;
}

function apaBook() {
    var authorFirst = document.getElementById("first").value[0];
    var authorLast = document.getElementById("last").value;
    var book = document.getElementById("article-title").value;
    var publisher = document.getElementById("publisher").value
    var year = document.getElementById("date").value;

    if (authorFirst.trim() === "" || authorLast.trim() === "" || book.trim() === "" 
    || publisher.trim() === "" || year.trim() === "") {
        alert("Please fill in all required fields.");
        return;
    }

    let citation = `${authorLast}, ${authorFirst}. ${year}. <i>${book}</i>. ${publisher}.`

    document.getElementById("apa-book-citation").innerHTML = citation;
}

function chicagoWeb() {
    var authorFirst = document.getElementById("first").value;
    var authorLast = document.getElementById("last").value;
    var article = document.getElementById("article-title").value;
    var date = document.getElementById("date").value;
    var website = document.getElementById("website-title").value;
    var link = document.getElementById("url").value;

    if (authorFirst.trim() === "" || authorLast.trim() === "" || article.trim() === "" 
    || date.trim() === "" || website.trim() === "" || link.trim() === "") {
        alert("Please fill in all required fields.");
        return;
    }

    let citation = `${authorLast}, ${authorFirst}. "${article}." <i>${website}</i>. ${date}. ${link}.`

    document.getElementById("chicago-web-citation").innerHTML = citation;
}

function chicagoJournal() {
    var authorFirst = document.getElementById("first").value;
    var authorLast = document.getElementById("last").value;
    var article = document.getElementById("article-title").value;
    var journal = ' ' + document.getElementById("journal-title").value + ' ';
    var volume = document.getElementById("volume").value;
    var issue = document.getElementById("issue").value;
    var year = document.getElementById("date").value;
    var pages = document.getElementById("pages").value;
    var doi = document.getElementById("url").value;

    if (authorFirst.trim() === "" || authorLast.trim() === "" || article.trim() === "" 
    || year.trim() === "" || journal.trim() === "" || doi.trim() === ""
    || volume.trim() === "" || issue.trim() === "" || pages.trim() === "") {
        alert("Please fill in all required fields.");
        return;
    }

    let citation = `${authorLast}, ${authorFirst}. "${article}." <i>${journal}</i> ${volume}, no. ${issue} (${year}): ${pages}. ${doi}.`

    document.getElementById("chicago-journal-citation").innerHTML = citation;
}

function chicagoBook() {
    var authorFirst = document.getElementById("first").value;
    var authorLast = document.getElementById("last").value;
    var book = document.getElementById("article-title").value;
    var publisher = document.getElementById("publisher").value;
    var publication = document.getElementById("publication").value;
    var year = document.getElementById("date").value;

    if (authorFirst.trim() === "" || authorLast.trim() === "" || book.trim() === "" 
    || publisher.trim() === "" || publication.trim() === "" || year.trim() === "") {
        alert("Please fill in all required fields.");
        return;
    }

    let citation = `${authorLast}, ${authorFirst}. <i>${book}</i>. ${publication}: ${publisher}, ${year}.`

    document.getElementById("chicago-book-citation").innerHTML = citation;
}