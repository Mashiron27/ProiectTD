var api = require('./src/api.js').app;
const fs = require('fs');
const ampsFilepath = './src/amps.json';

api.get('/', function (request, response) {
  response.json('NodeJS REST API');
});

api.get('/amps', function (request, response) {
  response.json(getAmps());
});

api.get('/amps/:id', function (request, response) {
  let amp = getAmpById(request.params.id);
  if (amp) response.json(amp);
  response.json('not found');
});

api.put('/amps', function (request, response) {
  response.json(request.body);
  saveAmp(request.body);
  
});

api.post('/amps', function (request, response) {
  let amps = [];
  try {
    amps = JSON.parse(fs.readFileSync(ampsFilepath, 'utf8'));
  } catch (err) {
    console.error(err);
    return false;
  }
  var selamp=getAmpById(request.body.id);
  if (selamp != null) {amps[request.body.id-1]=request.body};
  try {
    fs.writeFileSync(ampsFilepath, JSON.stringify(amps));
  } catch (err) {
    console.error(err)
  }
  response.json('Amp was updated succesfully');
});

api.delete('/amps/:index', function (request, response) {
  let amps = [];
  try {
    amps = JSON.parse(fs.readFileSync(ampsFilepath, 'utf8'));
  } catch (err) {
    console.error(err);
    return false;
  }

  var oof = 0;
  for (var i = 0; i < amps.length; i++)
  {
    if (amps[i].id == request.params.index)
      oof = i;
  }
  amps.splice(oof, 1);
  if (amps==null) console.log();
  else{
  try {
    fs.writeFileSync(ampsFilepath, JSON.stringify(amps));
  } catch (err) {
    console.error(err)
  }
}
   response.json('Amp with index ' + request.params.index + ' was deleted');
});

api.listen(3000, function () {
  console.log('Server running @ localhost:3000');
});

function getAmps() {
  let amps = [];
  try {
    amps = JSON.parse(fs.readFileSync(ampsFilepath, 'utf8'));
  } catch (err) {
    console.error(err);
    return false;
  }
  return amps;
}

function saveAmp(amp) {
  let amps = getAmps();
  let maxId = getMaxId(amps);
  amp.id = maxId+1;
  amps.push(amp);
  try {
    fs.writeFileSync(ampsFilepath, JSON.stringify(amps));
  } catch (err) {
    console.error(err)
  }
}

function getMaxId(amps) {
  let max = 0;
  for (var i=0; i<amps.length;i++) {
    if(max < amps[i].id) {
      max = amps[i].id;
    }
  }
  return max;
}

function getAmpById(id){
  let amps = getAmps();// citire json din fisier
  let selectedAmp = null;
  for(var i=0; i<amps.length; i++) {
    if(id == amps[i].id) selectedAmp = amps[i];
  }
  return selectedAmp;
}