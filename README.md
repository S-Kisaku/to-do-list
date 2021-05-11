### コマンド ################################################
#プロジェクトの開始方法（以下のコマンドを打ってね!）
cd app/infra
make init

#expressのサーバーに入る
cd app/infra
make express

#dbのサーバーに入る
cd app/infra
make mysql

# dbの設計 ################################################
- dbの種類:mysql
- 今回使用するテーブル:to_do_list
- 設定してあるユーザー設定
　username:dev
　password:dev

# expressについて #########################################
- テンプレートエンジンはejs
　　N予備だと pug ってやつを使うけど今回はejs
- ORMを使用してください
　　ORMとは　"SELCT * FROM users;"
　　みたいなデータベースの操作を簡単にするやつ！

 参考 https://tech.cloud-blazer.com/laravel-orm/

最後に.....
  #################################
  #　わかんねってなったら迷わず箕作まで 　#
  #################################
