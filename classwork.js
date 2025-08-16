function initImageComparison() {
            var container = document.getElementById('imageComparison');
            var afterImage = container.querySelector('.comparison-after');
            var slider = container.querySelector('.comparison-slider');
            var isDragging = false;

            function startDrag(e) {
                isDragging = true;
                container.style.cursor = 'ew-resize';
                e.preventDefault();
            }

            function drag(e) {
                if (!isDragging) return;

                var rect = container.getBoundingClientRect();
                var x = (e.type.indexOf('touch') !== -1 ? e.touches[0].clientX : e.clientX) - rect.left;
                var percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));

                afterImage.style.clipPath = 'polygon(0 0, ' + percentage + '% 0, ' + percentage + '% 100%, 0 100%)';
                slider.style.left = percentage + '%';
            }

            function stopDrag() {
                isDragging = false;
                container.style.cursor = 'ew-resize';
            }

            container.addEventListener('mousedown', startDrag);
            container.addEventListener('mousemove', drag);
            container.addEventListener('mouseup', stopDrag);
            container.addEventListener('mouseleave', stopDrag);

            // Touch events
            container.addEventListener('touchstart', startDrag);
            container.addEventListener('touchmove', drag);
            container.addEventListener('touchend', stopDrag);
        }