import Link from 'next/link';
import MyButton from '../components/MyButton';

const Index = () => <Link href='/catalog'><MyButton>{process.env.password}</MyButton></Link>;

export default Index;
