  // Alternar entre as seções
    document.querySelectorAll('.nav-btn').forEach(button => {
      button.addEventListener('click', () => {
        // Remover classe active de todos os botões e seções
        document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));
        
        // Adicionar classe active ao botão clicado
        button.classList.add('active');
        
        // Mostrar a seção correspondente
        const sectionId = button.getAttribute('data-section');
        document.getElementById(sectionId).classList.add('active');
      });
    });
    
    // Animar barras de progresso quando visíveis
    function animateSkillBars() {
      const skillsSection = document.getElementById('skills');
      
      if (skillsSection.classList.contains('active')) {
        document.querySelectorAll('.skill-bar').forEach(bar => {
          const width = bar.getAttribute('data-width');
          bar.style.width = width;
        });
      } else {
        document.querySelectorAll('.skill-bar').forEach(bar => {
          bar.style.width = '0%';
        });
      }
    }
    
    // Observar mudanças nas seções ativas
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          animateSkillBars();
        }
      });
    });
    
    document.querySelectorAll('.section').forEach(section => {
      observer.observe(section, { attributes: true });
    });
    
    // Inicializar animações
    document.addEventListener('DOMContentLoaded', () => {
      animateSkillBars();
    });
