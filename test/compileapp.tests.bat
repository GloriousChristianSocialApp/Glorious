@echo on
flutter build web 
cd build\web
python -m http.server 1234