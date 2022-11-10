function transform(line) {
    var values = line.split(',');
    var obj = new Object();
    obj.name = values[0];
    obj.category = values[1];
    obj.country = values[2];
    obj.num_episodes = values[3];
    obj.aired = values[4];
    obj.orginal_network = values[5];
    obj.duration = values[6];
    obj.watchers = values[7];
    obj.director = values[8];
    obj.screenwriter = values[6];
    obj.rating = values[7];
    obj.num_raters = values[8];
    obj.cast_names = values[9];
    obj.genre_names = values[10];
    obj.tag_names = values[11];
    obj.synopsis = values[12];
    obj.url = values[13];
    var jsonString = JSON.stringify(obj);
    return jsonString;
}
