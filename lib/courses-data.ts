export interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  lessons: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  levelColor: string;
  instructor: {
    name: string;
    avatar: string;
  };
  image: string;
  category: string;
}

export const courses: Course[] = [
  {
    id: 'html-css',
    title: 'HTML & CSS Fundamentals',
    description: 'Learn the building blocks of web development. Master HTML5 structure and CSS3 styling to create responsive websites.',
    price: 30,
    duration: '4 weeks',
    lessons: 16,
    level: 'Beginner',
    levelColor: 'yellow',
    instructor: {
      name: 'Dolraj Bashyal',
      avatar: '/instructor-1.jpg',
    },
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60',
    category: 'Frontend Development',
  },
  {
    id: 'javascript',
    title: 'JavaScript Essentials',
    description: 'Dive into modern JavaScript. Learn syntax, DOM manipulation, event handling, and ES6+ features for interactive web apps.',
    price: 60,
    duration: '6 weeks',
    lessons: 24,
    level: 'Intermediate',
    levelColor: 'blue',
    instructor: {
      name: 'Dolraj Bashyal',
      avatar: '/instructor-1.jpg',
    },
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&auto=format&fit=crop&q=60',
    category: 'Frontend Development',
  },
  {
    id: 'react',
    title: 'React Development',
    description: 'Master React.js framework. Build complex UIs with components, hooks, state management, and modern React patterns.',
    price: 90,
    duration: '8 weeks',
    lessons: 32,
    level: 'Advanced',
    levelColor: 'purple',
    instructor: {
      name: 'Dolraj Bashyal',
      avatar: '/instructor-1.jpg',
    },
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60',
    category: 'Frontend Development',
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design Principles',
    description: 'Learn design fundamentals for the web. Master user experience principles, wireframing, prototyping, and usability testing.',
    price: 60,
    duration: '6 weeks',
    lessons: 24,
    level: 'Beginner',
    levelColor: 'yellow',
    instructor: {
      name: 'Sarah Johnson',
      avatar: '/instructor-2.jpg',
    },
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=60',
    category: 'UI/UX Design',
  },
  {
    id: 'node',
    title: 'Node.js Backend Development',
    description: 'Build scalable server-side applications. Learn Express.js, RESTful APIs, MongoDB integration, and authentication.',
    price: 90,
    duration: '8 weeks',
    lessons: 32,
    level: 'Intermediate',
    levelColor: 'blue',
    instructor: {
      name: 'Michael Chen',
      avatar: '/instructor-3.jpg',
    },
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&auto=format&fit=crop&q=60',
    category: 'Backend Development',
  },
  {
    id: 'fullstack',
    title: 'Full Stack Web Development Bootcamp',
    description: 'Comprehensive program covering both frontend and backend. Build complete web applications from scratch to deployment.',
    price: 70,
    duration: '12 weeks',
    lessons: 48,
    level: 'Advanced',
    levelColor: 'purple',
    instructor: {
      name: 'Multiple Instructors',
      avatar: '/instructor-1.jpg',
    },
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60',
    category: 'Full Stack',
  },
] as const; 