function showInfo(id) {
  // Ẩn tất cả info khác
  const allInfos = document.querySelectorAll('.info');
  allInfos.forEach(info => {
    if (info.id === id) {
      // Toggle hiển thị
      info.style.display = info.style.display === 'block' ? 'none' : 'block';
    } else {
      info.style.display = 'none';
    }
  });
}
