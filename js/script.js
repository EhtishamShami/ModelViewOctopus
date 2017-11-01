

var position=0;


$('#cat1').click(function(e) {
    //the element has been clicked... do stuff here
    console.log("Number is "+position)

    catData.cat[position].clicks=catData.cat[position].clicks+1;

    $("#numbersTV").text(catData.cat[position].clicks);

  });


var catData=
{
  currentCat:null,
"cat":
[
{
 name:'Cutie',
 picture:'images/pic.jpg',
 clicks:0
},{

  name:'Sweet',
  picture:'images/pic1.jpg',
  clicks:0
 

},{

  name:'Awesome',
  picture:'images/pic.jpg'  ,
  clicks:0
 
},  
  {
    name:'Jesus',
    picture:'images/pic.jpg',
    clicks:0
   
  },
  {
      name:'Cool',
      picture:'images/pic.jpg',
      clicks:0
     
  }
]

};



var octopus=
{
  init:function()
  {

    catData.currentCat=catData.cat[0];

    catView.init();
    listView.init();
  },
  getCurrentCat()
  {

    return catData.currentCat;

  },
  setCurrentCat:function(cat)
  {
      catData.currentCat=cat;
  },
  getCats:function()
  {
    return catData.cat;
  }
  ,
  incrementCatCounter()
  {

    catData.currentCat.click++;
    catView.render();

  }


};



var catView=
{

init:function()
{
this.catElem= $("#catName");
this.catPictureElem=$("#catPicture");
this.catCountElem=$("#numbersTV");

catView.render();
}
,
render:function()
{

  var currentCat=octopus.getCurrentCat();

  this.catElem.text(currentCat.name);
  this.catPictureElem.attr('src',currentCat.picture);
  this.catCountElem.text(currentCat.click);
  
  
 
}

};


var listView=
{
  init:function()
  {
    this.catList=$("#catList");

    listView.render();

  }
  ,
  render:function()
  {
    var cats,elem;

    cats=octopus.getCats();

    cats.forEach(function(cat) {

      elem=document.createElement('li')
      elem.textContent=cat.name

      elem.addEventListener('click',(function(catCopy)
      {

          return function()
          {
              octopus.setCurrentCat(catCopy);
              catView.render();
          }

      })(cat))
      this.catList.append(elem);
    }, this);
  }

};






function SetValues()
{
 
    var catsArray=catData.cat;
  
    for(var i=0;i<catsArray.length;i++)
    {
      var currentCat=catsArray[i];
      var currentLI=HTMLcatListItem.replace("%data%",currentCat.name);
      $("#catList").append(currentLI);
  
    }
  
}


$(document).on("click", "#catList li", function(){
  console.log("index is:" ,  $(this).index() );
  $("#catName").text(catData.cat[$(this).index()].name);
  position=$(this).index()
  $("#catPicture").attr("src", catData.cat[$(this).index()].picture);
  $("#numbersTV").text(catData.cat[$(this).index()].clicks);
  
})


octopus.init();