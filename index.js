import express from 'express'

const port = 3000
const app = express()

app.use(express.urlencoded({ extended: true }))

app.use(express.static("public"))

const users = [
  {
    userName: "Alice",
    email: "alice@gmail.com",
    password: "alice123"
  },
  {
    userName: "Bob",
    email: "bob@gmail.com",
    password: "bob123"
  },
  {
    userName: "Charlie",
    email: "charlie@gmail.com",
    password: "charlie123"
  },
  {
    userName: "David",
    email: "david@gmail.com",
    password: "david123"
  },
  {
    userName: "Emma",
    email: "emma@gmail.com",
    password: "emma123"
  },
  {
    userName: "Frank",
    email: "frank@gmail.com",
    password: "frank123"
  },
  {
    userName: "Grace",
    email: "grace@gmail.com",
    password: "grace123"
  },
  {
    userName: "Henry",
    email: "henry@gmail.com",
    password: "henry123"
  },
  {
    userName: "Isabel",
    email: "isabel@gmail.com",
    password: "isabel123"
  }
];


let blogs = [
  {
    blogUser: "Alice",
    blogTitle: "10 Tips for Improving Productivity",
    blogDescription: "Discover practical and effective strategies to boost your productivity and accomplish more in less time.",
    blogContent: "In this blog post, we'll explore ten actionable tips for improving productivity. We'll cover time management techniques, setting SMART goals, minimizing distractions, optimizing your workspace, prioritizing tasks effectively, delegating tasks when necessary, taking regular breaks, staying organized, adopting a growth mindset, and seeking feedback to continuously improve.",
    blogTime: "March 03, 2024"
  },
  {
    blogUser: "Bob",
    blogTitle: "The Power of Positive Thinking",
    blogDescription: "Learn about the transformative impact of positive thinking on your mindset, behavior, and overall well-being.",
    blogContent: "Positive thinking can lead to greater resilience, improved relationships, increased success in various areas of life, and better overall well-being. In this blog, we'll delve into the science behind positive thinking, share practical tips for cultivating a positive mindset, discuss the importance of gratitude and optimism, explore techniques for reframing negative thoughts, and highlight the benefits of visualization and affirmations.",
    blogTime: "Feb 28, 2024"
  },
  {
    blogUser: "Charlie",
    blogTitle: "How to Start Your Own Business",
    blogDescription: "Gain insights into the essential steps and considerations for launching a successful business venture.",
    blogContent: "Starting your own business can be both exciting and challenging. In this comprehensive guide, we'll cover everything from developing a business idea and conducting market research to creating a business plan, securing funding, building a team, and navigating legal requirements. We'll also discuss common pitfalls to avoid, strategies for overcoming obstacles, and tips for sustaining long-term success.",
    blogTime: "dec 01, 2023"
  },
  {
    blogUser: "David",
    blogTitle: "Healthy Eating Habits for Busy Professionals",
    blogDescription: "Discover practical tips and strategies for maintaining a healthy diet despite a hectic schedule.",
    blogContent: "Maintaining healthy eating habits is essential for sustaining energy levels, managing stress, and supporting overall well-being, especially for busy professionals. In this blog post, we'll share practical tips for planning nutritious meals, making healthy food choices on the go, incorporating superfoods into your diet, staying hydrated, and practicing mindful eating. We'll also address common challenges and provide strategies for overcoming them.",
    blogTime: "Sept 15, 2023"
  },
  {
    blogUser: "Emma",
    blogTitle: "Exploring Meditation Techniques",
    blogDescription: "Explore different meditation techniques and their benefits for reducing stress, improving focus, and enhancing overall mental well-being.",
    blogContent: "Meditation has been practiced for centuries and is known for its profound effects on the mind and body. In this blog, we'll explore various meditation techniques, including mindfulness meditation, loving-kindness meditation, body scan meditation, transcendental meditation, and guided visualization. We'll discuss the benefits of each technique, offer practical tips for incorporating meditation into your daily routine, and address common misconceptions.",
    blogTime: "June 20, 2023"
  },
  {
    blogUser: "Frank",
    blogTitle: "The Benefits of Regular Exercise",
    blogDescription: "Learn about the numerous physical and mental health benefits of incorporating regular exercise into your lifestyle.",
    blogContent: "Regular exercise is essential for maintaining a healthy body and mind. In this blog post, we'll delve into the science-backed benefits of exercise, including improved cardiovascular health, enhanced immune function, reduced risk of chronic diseases, better mood regulation, and increased longevity. We'll also provide practical tips for incorporating physical activity into your daily routine, overcoming common barriers to exercise, and staying motivated.",
    blogTime: "July 10, 2023"
  },
  {
    blogUser: "Grace",
    blogTitle: "Traveling on a Budget: Tips and Tricks",
    blogDescription: "Discover practical tips and tricks for traveling affordably without compromising on the quality of your experience.",
    blogContent: "Traveling on a budget doesn't have to mean sacrificing comfort or missing out on memorable experiences. In this blog, we'll share insider tips and tricks for finding affordable flights, accommodations, and activities, as well as strategies for saving money while on the road. We'll cover topics such as budgeting for travel, choosing budget-friendly destinations, finding cheap transportation and accommodation options, and maximizing value for money.",
    blogTime: "August 05, 2023"
  },
  {
    blogUser: "Henry",
    blogTitle: "Effective Time Management Strategies",
    blogDescription: "Learn how to optimize your time and increase productivity with effective time management strategies.",
    blogContent: "Time is a precious resource, and effective time management is crucial for achieving your goals and maximizing your potential. In this blog post, we'll explore proven time management techniques, such as prioritization, goal setting, time blocking, the Pomodoro Technique, and the Eisenhower Matrix. We'll discuss how to identify and eliminate time-wasting activities, create a productive daily routine, and maintain work-life balance.",
    blogTime: "September 12, 2023"
  },
  {
    blogUser: "Isabel",
    blogTitle: "DIY Home Improvement Projects",
    blogDescription: "Discover creative and budget-friendly DIY home improvement projects to enhance the comfort, functionality, and aesthetics of your living space.",
    blogContent: "Transforming your home doesn't have to break the bank. In this blog, we'll share a variety of DIY home improvement projects that you can tackle with confidence, whether you're a novice or a seasoned DIY enthusiast. From simple upgrades like painting walls and replacing hardware to more ambitious projects like building furniture, installing fixtures, and renovating entire rooms, these ideas will inspire you to personalize your home and make it truly yours.",
    blogTime: "October 20, 2023"
  }
];



let loginSuccessfull = false

app.get("/", (req, res) => {
  res.render("index.ejs", {blogged: blogs, logged: loginSuccessfull });
});

app.get("/about",(req, res) =>{
  res.render("about.ejs")
})

app.get("/login", (req, res) => {
  res.render("login.ejs",{ error: "" })
})

app.get("/signup", (req, res) => {
  res.render("signup.ejs",{ errors: "" })
})

app.get("/writeBlog", (req, res) => {
  res.render("writeBlog.ejs")
})

app.post("/loginSubmit", (req, res) => {
  const email = req.body["email"];
  const password = req.body["password"];

  const user = users.find(user => user.email === email && user.password === password);

  if (!user) {
    return res.render("login.ejs", { error: "Invalid email or password" });
  }

  loginSuccessfull = true;

  res.redirect("/");
});


let userName = ""
app.post("/signUpSubmit", (req, res) => {
  userName = req.body["username"];
  const email = req.body["email"];
  const password = req.body["password"];
  const confirmPassword = req.body["confirmPassword"];

  let errors = [];
  if (!userName || !email || !password || !confirmPassword) {
    errors.push("All fields are required");
  }
  if (password !== confirmPassword) {
    errors.push("Passwords do not match");
  }
  if (errors.length > 0) {
    res.render("signup.ejs", { errors });
    return;
  }

  if (users.some(user => user.userName === userName)) {
    res.render("signup.ejs", { errors: ["Username already exists"] });
    return;
  }

  const newUser = {
    userName,
    email,
    password
  };
  users.unshift(newUser);
  console.log(newUser);

  loginSuccessfull = true;

  res.redirect("/login");
});

app.post("/blogSubmit",(req,res) => {
  let title = req.body["title"]
  let description = req.body["description"]
  let content = req.body["content"]
  const currentDate = new Date();
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const month = monthNames[currentDate.getMonth()];
const day = currentDate.getDate();
const year = currentDate.getFullYear();

const time = month + " " + day + ", " + year;

  let blog = {
    blogUser: userName,
    blogTitle: title,
    blogDescription: description,
    blogContent : content,
    blogTime: time,
  }

  blogs.unshift(blog);

  res.redirect("/")
})

app.listen(port, () => {
  console.log(`Listening to the port ${port}!`)
})
