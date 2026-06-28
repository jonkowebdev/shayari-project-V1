 document.querySelectorAll('.js-copy-button')
       .forEach((button) => {
        button.addEventListener('click', () => {
          const parent = button.closest('.whole-content');
          const card = parent.querySelector('.card');
          const shaayri = card.querySelector('.shayari');
          const text = shaayri.innerText;
          navigator.clipboard.writeText(text);
          console.log(text);
          button.classList.add('copied');
          button.innerHTML = 'Copied';
          setTimeout(() => {
            button.classList.remove('copied');
            button.innerHTML = 'Copy';
          }, 2000);
        });
       });

       document.querySelectorAll('.js-share-button')
        .forEach((button) => {
          button.addEventListener('click', () => {
            const parent = button.closest('.whole-content');
            const card = parent.querySelector('.card');
            const shaayri = card.querySelector('.shayari');
            const text = shaayri.innerText;
            navigator.share({
              title: 'Part Time Shayar',
              text: text
            });
            button.classList.add('sharing');
            setTimeout(() => {
              button.classList.remove('sharing');
            }, 2000);
          });
        });