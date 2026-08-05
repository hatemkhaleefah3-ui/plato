const DATA={
 courses:[
  {id:'med-1',name:'Medicine — Stage 1',visibility:'Institution',progress:68,students:124,active:true},
  {id:'eng-1',name:'Academic English',visibility:'Public',progress:42,students:318},
  {id:'skills',name:'Digital Study Skills',visibility:'Public',progress:81,students:542}
 ],
 subjects:[
  {name:'Human Anatomy',instructor:'Dr. Sara Kareem',progress:72,next:'Thu 10:00'},
  {name:'Cell Biology',instructor:'Dr. Omar Naji',progress:61,next:'Sun 12:30'},
  {name:'Medical Chemistry',instructor:'Dr. Lina Abbas',progress:78,next:'Mon 09:00'},
  {name:'Academic English',instructor:'Ms. Noor Ali',progress:54,next:'Tue 14:00'}
 ],
 requests:[
  {name:'Ali Hassan Karim',role:'Student',institution:'University of Baghdad',stage:'Stage 1',status:'Pending'},
  {name:'Zahra Raad Salim',role:'Representative Student',institution:'Al-Nahrain University',stage:'Stage 2',status:'Pending'},
  {name:'Mustafa Adnan',role:'Teacher',institution:'Free user',stage:'—',status:'Pending'}
 ],
 announcements:[
  {title:'Anatomy lab moved',body:'Thursday lab will be held in Room B12 at 10:00.'},
  {title:'Volunteer registration',body:'Community health campaign registration closes Friday.'},
  {title:'New study room',body:'A peer-led chemistry room is now open for Stage 1.'}
 ],
 nav:{
  Student:['Home','Study','Calendar','Study Rooms','Community','Progress & Analytics'],
  'Representative Student':['Home','Study','Calendar','Study Rooms','Community','Progress & Analytics','Rep Tools','Requests'],
  Teacher:['Dashboard','My Classes','Gradebook','Calendar','Community','Create Course'],
  Manager:['Dashboard','Team Overview','Course Oversight','Reports & Analytics','Approvals'],
  Admin:['Dashboard','User Management','Course Management','Jobs & Volunteer','Donations & Finance','Content Moderation','Roles & Permissions','Reports & Analytics','System Settings']
 }
};
