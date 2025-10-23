
;(function($) {
    
    $.fn.zoomImage = function(paras) {
     
        var defaultParas = {
            layerW: 100, 
            layerH: 100, 
            layerOpacity: 0.2,
            layerBgc: '#000', 
            ShowPanelW: 500, 
            ShowPanelH: 500, 
            marginL: 5, 
            marginT: 0 
        };

        paras = $.extend({}, defaultParas, paras);

        $(this).each(function() {
            var self = $(this).css({position: 'relative'});
            var selfOffset = self.offset();
            var imageW = self.width(); 
            var imageH = self.height();

            self.find('img').css({
                width: '100%',
                height: '100%'
            });

            
            var wTimes = paras.ShowPanelW / paras.layerW;
           
            var hTimes = paras.ShowPanelH / paras.layerH;

           
            var img = $('<img>').attr('src', self.attr("href")).css({
                position: 'absolute',
                left: '0',
                top: '0',
                width: imageW * wTimes,
                height: imageH * hTimes
            }).attr('id', 'big-img');

            
            var layer = $('<div>').css({
                display: 'none',
                position: 'absolute',
                left: '0',
                top: '0',
                backgroundColor: paras.layerBgc,
                width: paras.layerW,
                height: paras.layerH,
                opacity: paras.layerOpacity,
                border: '1px solid #ccc',
                cursor: 'crosshair'
            });

            var ShowPanel = $('<div>').css({
                display: 'none',
                position: 'absolute',
                overflow: 'hidden',
                left: imageW + paras.marginL,
                top: paras.marginT,
                width: paras.ShowPanelW,
                height: paras.ShowPanelH
            }).append(img);

            self.append(layer).append(ShowPanel);

            self.on('mousemove', function(e) {
                
                var x = e.pageX - selfOffset.left;
                var y = e.pageY - selfOffset.top;

                if(x <= paras.layerW / 2) {
                    x = 0;
                }else if(x >= imageW - paras.layerW / 2) {
                    x = imageW - paras.layerW;
                }else {
                    x = x - paras.layerW / 2;
                }

                if(y < paras.layerH / 2) {
                    y = 0;
                } else if(y >= imageH - paras.layerH / 2) {
                    y = imageH - paras.layerH;
                } else {
                    y = y - paras.layerH / 2;
                }

                layer.css({
                    left: x,
                    top: y
                });

                img.css({
                    left: -x * wTimes,
                    top: -y * hTimes
                });
            }).on('mouseenter', function() {
                layer.show();
                ShowPanel.Show();
            }).on('mouseleave', function() {
                layer.hide();
                ShowPanel.hide();
            });
        });
    }
})(jQuery);
