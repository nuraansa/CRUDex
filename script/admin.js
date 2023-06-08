let blogPosts = [
    {
    id: " 1",
    title: "What is Interior Design?",
    imageUrl: "https://i.postimg.cc/FFkmZLNf/what-does-an-interior-designer-do.jpg",
    description: "All you need To know about Interior Design",
    content: " This comprehensive guide covers the fundamental principles of interior design, including color schemes, spatial layout, furniture selection, and more. There is a lot to learn about Interior design but 'webisite address' has made it easier for all beginners. Learn more by visiting <a href = 'https://freshome.com/beginners-guide-interior-design/' > Fresh Home</a>",
    date: new Date( )
    },
    {
    id: " 2",
    title: "Interior Design Elements",
    imageUrl: "https://i.postimg.cc/bwrpCQVk/7e389f51fc4f36438e4c46.webp",
    description: "What you need to know about design elements",
    content: "Interior design elements are the fundamental building blocks used to create visually appealing and functional spaces. Understanding how to effectively use these elements can transform a room, evoking different moods and achieving specific design goals. Houzz (https://www.houzz.com/ideabooks/interior-design-elements) is a popular website that provides a wealth of information on interior design elements. Their ideabooks cover various design elements, offering inspiration, tips, and in-depth explanations of how to incorporate these elements into your own interior design projects. Whether you're looking to understand the power of color, the importance of lighting, or how to choose the right furniture, Houzz is a valuable resource for exploring and learning about interior design elements ",
    date: new Date( )
    },
    {
        id: " 3",
        title: "The Flow of the Home",
        imageUrl: "https://i.postimg.cc/28khsryf/Arch2-O-what-you-need-to-know-before-becoming-an-interior-designer-6.jpg",
        description: "Seamless and Logical movement in Your House", 
        content: " The seamless and logical movement between different spaces within your home matters. This is all about creating a layout that allows for easy navigation and a harmonious transition from one room to another. An effective flow considers factors such as furniture placement, spatial arrangement, and architectural elements. Read more <a href = 'https://www.houzz.com/ideabooks/interior-design-basics'>here</a> ",
        date: new Date( )
    },
    {
        id: " 4",
        title: "Color Theory",
        imageUrl: "https://i.postimg.cc/0QPxBZv5/interior-designer-looking-at-different-swatches-of-paint-colours-in-front-of-interior-design-images.jpg",
        description: "Choosing the Right Colors for Your Space",
        content: " Color theory in interior design focuses on how colors can elicit particular emotions, set moods, and influence the overall ambiance of a space. It involves comprehending the color wheel, harmonies between colors, and the psychological impact different colors have on individuals. By incorporating color theory principles, interior designers can establish visually pleasing and well-balanced spaces that resonate with the intended style and function of the room. <a href = 'https://www.thespruce.com/interior-color-schemes-4528291'>The Spruce</a> elaborates further on this.",
        date: new Date( )
    },
    
    {
        id: " 5",
        title: "Mastering Lights",
        imageUrl: "https://i.postimg.cc/MTrsLG7d/Whats-App-Image-2019-04-23-at-06-20-10.jpg",
        description: "Illuminating Your Interiors Like a Pro",
        content: "<a href ='https://www.lampsplus.com/ideas-and-advice/how-to-light-a-room/'> Learn more </a> about the different types of lighting, layering techniques, and tips for creating the right ambiance in each room, enhancing both functionality and aesthetics. ",
        date: new Date( )
    },
    
    {
        id: " 6",
        title: "Furniture 101",
        imageUrl: "https://i.postimg.cc/0QnmBJPw/pexels-martin-p-chy-1866149.jpg",
        description: "Understanding Styles, Materials, and Placement",
        content: " Get acquainted with different furniture styles, materials, and how to choose and arrange furniture pieces to optimize functionality, aesthetics, and traffic flow. Make sure to visit <a href = 'https://www.wayfair.com/ideas-and-advice/furniture-101-e201' >Wayfair</a> to learn more about placement in your home",
        date: new Date( )
    },
    
    {
        id: " 7",
        title: "Textiles and Fabrics",
        imageUrl: "https://i.postimg.cc/gjBhYFwc/pexels-designecologist-1248583.jpg",
        description: "Adding Texture and Comfort to Your Home",
        content: "Discover the <a href = 'https://foter.com/interior-fabrics-and-textiles-everything-you-need-to-know'>role of textiles and fabrics </a> in interior design, including tips on choosing the right materials, patterns, and textures to enhance the comfort and visual appeal of your home. ",
        date: new Date( )
    },
    
    {
        id: " 8",
        title: "Budget-Friendly Tips",
        imageUrl: "https://i.postimg.cc/5NmPcpSX/maxresdefault.jpg",
        description: "How to Decorate on a Beginner's Budget",
        content: " Designing your dream space doesn't have to break the bank. <a href ='https://www.livspace.com/my/magazine/tips-for-interior-design-on-a-budget'>Liv Space</a> focuses on providing practical and creative tips for achieving stylish interior design on a budget. From smart shopping strategies to repurposing existing items, you'll discover how to make the most of your resources while creating a beautiful and inviting home  ",
        date: new Date( )
    },
    
    {
        id: " 9",
        title: "DIY Interior",
        imageUrl: "https://i.postimg.cc/5N1XYmdq/wall-decor-ideas.jpg",
        description: "Fun projects to kick of your inner interior designer",
        content: " Add a personal touch to your living space with easy and affordable DIY decor projects. Craft unique wall art, repurpose furniture, and create decorative accents to showcase your creativity. Explore a variety of project ideas and step-by-step instructions by clicking <a href = ''>here</a>. Personalize your home and enjoy the satisfaction of creating your own stylish decor. Projects not only add a personal touch but also provide a sense of accomplishment as you bring your own style and creativity to your home decor. ",
        date: new Date( )
    }
    ]
    let blog = document.querySelector('#blogDisplay');
blogPosts.forEach((data)=> {
    blog.innerHTML += 
    // `
    // <div class="card" style = "width: 18rem">
    //     <h4 class="display-6">${data.title}</h4>
    //     <img class="card-img-top" src="${data.imageUrl}" alt="img">
    //     <div class="card-body container-fluid">
    //         <p class="text-black">
    //          <span>${data.description}</span>
    //         </p>
    //     </div>
    // </div>
    // `

`     
      <div class="container-fluid d-flex flex-row">
      <div class="card text-bg-dark m-3" style="width: 30rem">
      <img class="card-img-top" src="${data.imageUrl}" alt="img">
        <div class="card-img-overlay">
          <h5 class="card-title">${data.title}</h5>
        <p>Nuuran Samodien</p>
          <p class="card-text">
          <span>${data.description}</span>
          </p>
        
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Launch demo modal
          </button
        //   ______________________________________________
        //   <!-- Modal -->
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">
                    Modal title
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">...</div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
`
})