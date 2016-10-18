/**
 * Created by CesyZhao on 2016/10/18.
 */

function getDb(){
    var db = openDatabase("musics",1.0,'musics DB',2*1024*1024);
    console.log(db);
}
getDb();
