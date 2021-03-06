
var containerSize = $('#container').width()
var rad = ((containerSize/3).toString()) + "px"
var type = 1, //circle type - 1 whole, 0.5 half, 0.25 quarter
    radius = rad, //distance from center
    start = -90, //shift start from 0
    $elements = $('li.animated:not(:first-child)'),
    numberOfElements = (type === 1) ?  $elements.length : $elements.length - 1, //adj for even distro of elements when not full circle
    slice = 360 * type / numberOfElements;

$elements.each(function(i) {
    var $self = $(this),
        rotate = slice * i + start,
        rotateReverse = rotate * -1;
    
    $self.css({
        'transform': 'rotate(' + rotate + 'deg) translate(' + radius + ') rotate(' + rotateReverse + 'deg)'
    });
});
console.log("WOOOO")

$(window).bind('resize', function(e)
{
  console.log('window resized..');
  this.location.reload(false); /* false to get page from cache */
  /* true to fetch page from server */
});