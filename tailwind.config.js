// tailwind.config.js  
module.exports = {  
    content: [  
      "./pages/**/*.{js,ts,jsx,tsx}",   // مسارات ملفات الصفحة  
      "./components/**/*.{js,ts,jsx,tsx}", // مسارات المكونات  
    ],  
    theme: {  
      extend: {  
        fontFamily: {  
          arabic: ['Amiri', 'serif'], // اسم الخط حسب الذي ترفعه أو تدمجه  
          // يمكن إضافة خطوط أخرى هنا  
        },  
        colors: {  
          // ألوان مخصصة إذا رغبت  
        },  
      },  
    },  
    plugins: [],  
  }  