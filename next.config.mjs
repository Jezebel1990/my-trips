/** @type {import('next').NextConfig} */
import withPWA from 'next-pwa';
const isProduction = process.env.NODE_ENV === 'production';

const config = {

};



const nextConfig = withPWA({

     dest: 'public', 
    disable: !isProduction,
   
  })(
    config
  );



export default nextConfig;
