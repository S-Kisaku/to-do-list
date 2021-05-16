========================================================================
Environment for people who studied Progate
========================================================================

# 開発の手順 ##########################################
- 環境セットアップ 　=はコマンドの説明（）の中は説明なのでコマンド打つときは省く
  - ターミナルを開く
  = cd infra　（infraフォルダに移動
  = make init （プロジェクト作成）
  - 2分ほど待つ
  - ブラウザの上の検索バーにて localhost:3000 と検索するとプロジェクトにアクセスできる
    Hellow ToDoList と表示されずエラーがでたら箕作まで!

- ToDoを管理するためのテーブルをつくる
  テーブルの設計(以下はカラム設計。多分何言ってるかわからないと思うから調べてもらうか、箕作天志まで!)
  - id INT型, NOT NULL, AUTO_INCREMENT, PRIMARY KEY
  - name VARCHAR(255)型, NOT NULL

- app/app.jsにToDo追加機能を追加

- app/app.jsに追加したToDoを表示する機能追加

- app/app.jsにToDoの削除機能を追加

- app/app.jsにToDoの編集機能を追加

- 完成!

# コマンド ############################################
#プロジェクトの開始方法（以下のコマンドを打ってね!）
cd app/infra
make init

#expressのサーバーに入る
cd app/infra
make exec-express

#dbのサーバーに入る
cd app/infra
make exec-mysql

# dbの設計 ##########################################
- dbの種類:mysql
- 今回使用するデータベース:to_do_list
- 設定してあるユーザー設定
　username: dev
　password: dev

# expressについて ####################################
- テンプレートエンジンはejs
　　N予備だと pug ってやつを使うけど今回はejs

 参考 https://qiita.com/y4u0t2a1r0/items/fb7a879cdd2a187bad29
 N予備 第3章の23

最後に....
  #　わかんねってなったら迷わず箕作まで
