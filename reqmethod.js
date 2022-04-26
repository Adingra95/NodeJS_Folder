app.use((req,res,next)=>
{
    res.render('notify.hbs');
    next();
});
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('')