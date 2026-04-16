// 获取所有按钮、弹窗、关闭、遮罩
const btns = document.querySelectorAll('.feature-btn');
const modals = document.querySelectorAll('.modal');
const closes = document.querySelectorAll('.modal-close');
const mask = document.querySelector('.mask');

// 打开对应弹窗
btns.forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.dataset.target;
    const targetModal = document.getElementById(targetId);

    // 隐藏所有
    modals.forEach(m => m.style.display = 'none');

    // 显示当前
    targetModal.style.display = 'block';
    mask.style.display = 'block';
  });
});

// 关闭
closes.forEach(close => {
  close.addEventListener('click', () => {
    modals.forEach(m => m.style.display = 'none');
    mask.style.display = 'none';
  });
});

// 点遮罩关闭
mask.addEventListener('click', () => {
  modals.forEach(m => m.style.display = 'none');
  mask.style.display = 'none';
});