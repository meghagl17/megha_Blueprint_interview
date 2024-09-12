const cards = `[
    {
      "ques": "What is the capital of France?",
      "ans": "Paris",
      "img": "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "category": "Geography"
    },
    {
      "ques": "How many legs does a spider have?",
      "ans": "Eight",
      "img": "https://images.unsplash.com/photo-1544717455-4cf7ad978978?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "category": "Science"
    },
    {
      "ques": "What color is an apples most commonly?",
      "ans": "Red (though there are other colors too)",
      "img": "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "category": "Science"
    },
    {
      "ques": "Who wrote 'Romeo and Juliet'?",
      "ans": "William Shakespeare",
      "img": "https://www.thoughtco.com/thmb/-FrN7ySBVUV3pmuCvLBYX0brU5k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/silhouette-of-kissing-romeo-and-juliet-467128476-72aea82c364e4b458af4c2defc45c15a.jpg",
      "category": "English"
    },
    {
      "ques": "What is the tallest mammal?",
      "ans": "Giraffe",
      "img": "https://images.unsplash.com/photo-1547721064-da6cfb341d50?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "category": "Science"
    },
    {
      "ques": "How many continents are there?",
      "ans": "Seven",
      "img": "https://images.unsplash.com/photo-1593632717071-218c1d85c663?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "category": "Geography"
    },
    {
      "ques": "What is 2 + 2?",
      "ans": "Four",
      "img": "https://images.unsplash.com/photo-1518133835878-5a93cc3f89e5?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "category": "Math"
    },
    {
      "ques": "What is the name of our galaxy?",
      "ans": "Milky Way",
      "img": "https://images.unsplash.com/photo-1538370965046-79c0d6907d47?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "category": "Science"
    },
    {
      "ques": "Who painted the Mona Lisa?",
      "ans": "Leonardo da Vinci",
      "img": "https://images.unsplash.com/photo-1423742774270-6884aac775fa?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "category": "Art"
    },
    {
      "ques": "What is the capital of the United States?",
      "ans": "Washington, D.C.",
      "img": "https://images.unsplash.com/photo-1552337125-0c43e12efec0?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "category": "Geography"
    },
    {
      "ques": "What is the largest planet in our solar system?",
      "ans": "Jupiter",
      "img": "https://images.unsplash.com/photo-1630839437035-dac17da580d0?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "category": "Science"
    },
    {
      "ques": "What is the main ingredient in bread?",
      "ans": "Flour",
      "img": "https://images.unsplash.com/photo-1627485937980-221c88ac04f9?q=80&w=1783&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "category": "Science"
    },
    {
      "ques": "What is the opposite of 'day'?",
      "ans": "Night",
      "img": "https://images.unsplash.com/photo-1505322022379-7c3353ee6291?q=80&w=1500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "category": "English"
    },
    {
      "ques": "What is the hardest natural substance on Earth?",
      "ans": "Diamond",
      "img": "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "category": "Science"
    },
    {
      "ques": "Who was the first President of the United States?",
      "ans": "George Washington",
      "img": "https://images.unsplash.com/photo-1585076800588-77e0884c3191?q=80&w=486&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "category": "History"
    },
    {
      "ques": "What is the process by which plants make their own food?",
      "ans": "Photosynthesis",
      "img": "https://images.unsplash.com/photo-1575703397367-725a44bcc790?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "category": "Science"
    },
    {
      "ques": "How many sides does a triangle have?",
      "ans": "Three",
      "img": "https://images.unsplash.com/photo-1575703397367-725a44bcc790?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "category": "Math"
    },
    {
      "ques": "What is the largest ocean on Earth?",
      "ans": "Pacific Ocean",
      "img": "https://images.unsplash.com/photo-1439405326854-014607f694d7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "category": "Geography"
    },
    {
      "ques": "What is the smallest planet in our solar system?",
      "ans": "Mercury",
      "img": "https://cdn.mos.cms.futurecdn.net/fjbeeRiPRQjQNhizwy7cWX-1200-80.jpg",
      "category": "Science"
    },
    {
      "ques": "What is the chemical symbol for water?",
      "ans": "H2O",
      "img": "https://plus.unsplash.com/premium_photo-1674831509457-b96ea66fe244?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "category": "Science"
    },
    {
      "ques": "Who is known as the father of modern physics?",
      "ans": "Albert Einstein",
      "img": "https://hips.hearstapps.com/hmg-prod/images/albert-einstein-sticks-out-his-tongue-when-asked-by-news-photo-1681316749.jpg",
      "category": "Science"
    },
    {
      "ques": "What is the capital of Japan?",
      "ans": "Tokyo",
      "img": "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "category": "Geography"
    },
    {
      "ques": "What is the primary function of the heart?",
      "ans": "To pump blood throughout the body",
      "img": "https://plus.unsplash.com/premium_photo-1677102356739-21994cd7787d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "category": "Science"
    },
    {
      "ques": "What is the name of the force that pulls objects toward the center of the Earth?",
      "ans": "Gravity",
      "img": "https://images.unsplash.com/photo-1522332896918-9622e84d53d7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "category": "Science"
    },
    {
      "ques": "What is the largest land mammal?",
      "ans": "Elephant",
      "img": "https://images.unsplash.com/photo-1603483080228-04f2313d9f10?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "category": "Science"
    },
    {
      "ques": "What is the sum of all angles in a triangle?",
      "ans": "180 degrees",
      "img": "https://images.unsplash.com/photo-1416339158484-9637228cc908?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "category": "Math"
    }
  ]
  `;

export default cards;