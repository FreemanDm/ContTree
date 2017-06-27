var tasks={};

tasks.tasks=generateTasks();
	
var getTasks=function()
{
	return tasks;
};

function generateTask()
	{
		var task={};
		task.id=getRandomInt(1,10000);
		task.name=newQuote();
		task.percentage="0%";
		task.status="starting";
		return task;
	}
	
function getRandomInt(min, max) {
	if(max-min==1) return 1;
  return Math.floor(Math.random() * (max - min)) + min;
}

function newQuote() {
    var quotes =
        [
            'Young, wild, American',
            'Lookin\' to be something',
            'Out of school go-go\'n for a hundred or two',
            'I\'ll just keep go-go\'n',
            'And this dance is on you',
            'One, five, ten, lay a million on me',
            'Before the end of this song',
            'Young, wild, American',
            'C\'mon baby, do you have a girlfriend?',
            'Rain on me a million',
            'I\'m not flawless, but I gotta diamond heart'
        ];
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    return quotes[randomNumber];
}

function generateTasks()
{
	var length=100;
	var tasks=[];
	var i;
	for(i=0;i<length;i++)
	{
		tasks[i]=generateTask();
	}
	return tasks;
}

setInterval(updateTasks,10000);

function updateTasks()
{
	taskList=tasks.tasks;
	for(i=0;i<taskList.length;i++)
	{
		var perc=parseInt(taskList[i].percentage.split("%")[0]);
		perc+=getRandomInt(0,(100-perc));
		if(perc>0 && perc<100) taskList[i].status="running";
		if(perc==100) taskList[i].status="ended";
		taskList[i].percentage=perc+"%";
	}
}

function getTaskById(taskId) {
	var i;
	for (i=0; i<tasks.tasks.length; i++){
		if(tasks.tasks[i].id == parseInt(taskId))
		{			
			return tasks.tasks[i];
		}
	}
}

module.exports.getTasks = getTasks;
module.exports.getTaskById = getTaskById;
