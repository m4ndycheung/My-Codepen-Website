

// Carousel Section Start

var images, descriptions;

// Describe this function...
function getImage() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_image_carousel = document.getElementById('image-carousel');
  element_image_carousel.setAttribute("src", images[0]);
  let element_description = document.getElementById('description');
  element_description.innerText = descriptions[0];
}


images = ['https://c.tenor.com/3aprEaHFOjMAAAAC/anime-aesthetic.gif', 'https://i.gifer.com/1DNi.gif', 'https://s12.favim.com/gif_previews/6/660/6603/66030/6603064.gif', 'https://c.tenor.com/17K76r82jfAAAAAC/train-ride-train.gif', 'https://i.pinimg.com/originals/bb/e7/15/bbe71537e79d0eb061ae4ef1691841a4.gif', 'https://pa1.narvii.com/8301/fe365c5467bab949f02bf9a4a11e16bfc84fedf4r1-540-320_hq.gif', 'https://c.tenor.com/0XEcmuuZ_kAAAAAd/arrietty-ghibli.gif', 'https://i.pinimg.com/originals/d8/ce/bb/d8cebb08384bb2ef04f18c2029794186.gif', 'https://animesher.com/orig/1/183/1837/18370/animesher.com_gif-studio-ghibli-kikis-delivery-service-1837075.gif', 'https://animesher.com/orig/1/117/1173/11739/animesher.com_spirity-away-scenery-studio-ghibli-1173926.gif', 'https://c.tenor.com/uW_XxR1cypMAAAAd/aesthetic-anime.gif'];
descriptions = ['“Failure is not falling down but refusing to get up.”', ' “In a dark place we find ourselves, and a little more knowledge lights our way.”', '"All we have to decide is what to do with the time that is given to us."', '“The dark does not destroy the light; it defines it. It\'s our fear of the dark that casts our joy into the shadows.”', '"Every action you take is a vote for the type of person you wish to become."', '"I\'ve heard it said // That people come into our lives // For a reason // Bringing something we must learn."', '“Your job is not to figure out how it’s going to happen for you, but to open the door in your head. And when the door opens in real life, just walk through it.”', '“Everything you gain in life will rot and fall apart, and all that will be left of you is what was in your heart.”', '"The Only Thing I Do Know Is That We Have To Be Kind. Please, Be Kind. Especially When We Don\'t Know What\'s Going On."', '"I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times."', '"Two little mice fell into a bucket of cream. The first mouse quickly gave up and drowned. The second mouse, wouldn’t quit. He struggled so hard that eventually he churned that cream into butter and crawled out. Gentlemen, as of this moment, I am that second mouse."'];
getImage();


document.getElementById('next').addEventListener('click', (event) => {
  images.push(images.shift());
  descriptions.push(descriptions.shift());
  getImage();

});

document.getElementById('previous').addEventListener('click', (event) => {
  images.unshift(images.pop());
  descriptions.unshift(descriptions.pop());
  getImage();

});

// Carousel Section End


// Comments Section Start

var comments, comment, author;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}

// Describe this function...
function checkAuthor() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  if (author == 0) {
    comments.forEach((comment) => {
      let element_comment_list = document.getElementById('comment-list');
      let new_li = document.createElement('li');
      new_li.innerText = comments.shift();
      let new_div = document.createElement('div');
      let new_span = document.createElement('span');
      new_span.innerText = ' - from Anonymous';

      new_div.appendChild(new_span);

      new_li.appendChild(new_div);

      element_comment_list.appendChild(new_li);
    });
  } else {
    comments.forEach((comment) => {
      let element_comment_list2 = document.getElementById('comment-list');
      let new_li2 = document.createElement('li');
      new_li2.innerText = comments.shift();
      let new_div2 = document.createElement('div');
      let new_span2 = document.createElement('span');
      new_span2.innerText = ' - ';

      new_div2.appendChild(new_span2);
      let new_span3 = document.createElement('span');
      author = getNumberOrString(document.getElementById('comment-author').value);
      new_span3.innerText = author;

      new_div2.appendChild(new_span3);

      new_li2.appendChild(new_div2);

      element_comment_list2.appendChild(new_li2);
    });
  }
}


comments = [];


document.getElementById('comment-button').addEventListener('click', (event) => {
  comment = getNumberOrString(document.getElementById('comment-text').value);
  author = getNumberOrString(document.getElementById('comment-author').value);
  comments.unshift(comment);
  checkAuthor();

});

// End Comments Section