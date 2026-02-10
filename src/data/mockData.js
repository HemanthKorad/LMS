export const stats = [
  { label: "Active Courses", value: "128", change: "+12% vs last month" },
  { label: "Total Learners", value: "9,430", change: "+8% vs last month" },
  { label: "Completion Rate", value: "86%", change: "+4% vs last month" },
  { label: "Avg. Rating", value: "4.7", change: "+0.3 vs last month" }
];

export const courses = [
  {
    id: "1",
    title: "Leadership in Tech",
    status: "Active",
    category: "Management",
    description: "Empower managers with real-world coaching frameworks.",
    learners: 1240,
    rating: 4.8,
    duration: "6 weeks",
    instructor: "Amina Bright"
  },
  {
    id: "2",
    title: "Full Stack Foundations",
    status: "Draft",
    category: "Engineering",
    description: "Build scalable apps with hands-on labs and projects.",
    learners: 980,
    rating: 4.6,
    duration: "8 weeks",
    instructor: "Jide Hassan"
  },
  {
    id: "3",
    title: "Product Design Sprint",
    status: "Active",
    category: "Design",
    description: "Go from discovery to prototype using sprint rituals.",
    learners: 760,
    rating: 4.9,
    duration: "4 weeks",
    instructor: "Helena Cruz"
  },
  {
    id: "4",
    title: "Data Analytics Essentials",
    status: "Paused",
    category: "Data",
    description: "Master dashboards, reporting, and decision insights.",
    learners: 650,
    rating: 4.5,
    duration: "5 weeks",
    instructor: "Sundeep Rao"
  }
];

export const students = [
  {
    id: "s1",
    name: "Nora Oladipo",
    cohort: "Oct 2024",
    courses: "5",
    progress: "78%",
    status: "Active"
  },
  {
    id: "s2",
    name: "Tomi Adeyemi",
    cohort: "Jul 2024",
    courses: "4",
    progress: "92%",
    status: "Active"
  },
  {
    id: "s3",
    name: "Bola Chukwu",
    cohort: "Oct 2024",
    courses: "3",
    progress: "65%",
    status: "At risk"
  },
  {
    id: "s4",
    name: "Samir Khan",
    cohort: "Jan 2024",
    courses: "6",
    progress: "100%",
    status: "Completed"
  }
];

export const instructors = [
  {
    id: "i1",
    name: "Amina Bright",
    speciality: "Leadership",
    courses: "4",
    rating: "4.9",
    learners: "2,200"
  },
  {
    id: "i2",
    name: "Jide Hassan",
    speciality: "Engineering",
    courses: "5",
    rating: "4.7",
    learners: "1,950"
  },
  {
    id: "i3",
    name: "Helena Cruz",
    speciality: "Design",
    courses: "3",
    rating: "4.8",
    learners: "1,120"
  }
];
