// إعداد Supabase
const { createClient } = supabase;
const supabaseUrl = 'https://ecmfoqfspqdzoecqyazu.supabase.co'; // عنوان مشروعك
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjbWZvcWZzcHFkem9lY3F5YXp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg4NTIxMzAsImV4cCI6MjA0NDQyODEzMH0.YEoN-4PCTgWrQPSumukSvSngCVlvJNN7Xzk4wNuZQUQ'; // المفتاح الخاص بك
const supabase = createClient(supabaseUrl, supabaseKey);

document.querySelectorAll('.law-title').forEach(title => {
    title.addEventListener('click', () => {
        const content = title.nextElementSibling; // الحصول على العنصر التالي (محتوى القانون)

        // تغيير حالة العرض
        if (content.classList.contains('show')) {
            content.classList.remove('show'); // إخفاء المحتوى
        } else {
            content.classList.add('show'); // عرض المحتوى
        }
    });
});
