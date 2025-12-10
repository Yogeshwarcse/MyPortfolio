import Blogs from '../components/Blogs';

const sampleBlogs = [
  { title:'Understanding React', description:'Short intro to React' },
  { title:'Node Tips', description:'Best practices' }
];

export default function BlogPage(){ 
  return <Blogs blogs={sampleBlogs}/> 
}
