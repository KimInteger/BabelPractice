import sqlite3, { Database } from 'sqlite3';
import path from 'path';

const rootDir : string = path.resolve(__dirname,'..','..')
const dbPath : string = path.join(rootDir,'database','database.db');

function connectDB() : Database {
  const db = new sqlite3.Database(dbPath, (err:Error | null):void=>{
    if(err){
      console.error(err.message);
    } else {
      console.log('데이터 베이스가 성공적으로 연결되었습니다.');
    }
  });
  return db;
}

const db : Database = connectDB();

db.serialize(() : void => {
  db.run("CREATE TABLE IF NOT EXISTS test (name TEXT NOT NULL, age INTEGER NOT NULL)",(err : Error | null) : void => {
    if(err){
      console.error(err.message);
    } else {
      console.log('테이블이 생성되었습니다.');
    }
  }); 
});