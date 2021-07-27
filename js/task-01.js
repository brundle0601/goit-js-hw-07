const ulRef = document.querySelector('#categories');

const categories = ulRef.children;

console.log(`В списке ${categories.length} категории.`);


[...categories].forEach(category => {
    const h2Ref = category.querySelector('h2');
    const innerUlRef = category.querySelector('ul');

    console.log(
        `- Категория: ${h2Ref.textContent}\n- Количество элементов: ${innerUlRef.children.length}`,
    );
});
