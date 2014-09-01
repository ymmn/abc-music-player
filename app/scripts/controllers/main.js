'use strict';

angular.module('abcPlayerApp')
  .controller('MainCtrl', [
    '$scope', '$http',
    function($scope) {

      $scope.$watch('abcMusicString', function(nval) {
        try {
          $scope.beatTimeFormat = window.convertAbcToBeatTimeFormat(window.parser(nval));
          $scope.validAbcMusic = true;
          $scope.parserStatus = 'Parsed successfully!';
        } catch (err) {
          $scope.parserStatus = err.name + ': ' + err.message;
          $scope.validAbcMusic = false;
        }
      });

      $scope.playSong = function() {
        window.SongPlayer.playSong($scope.beatTimeFormat);
        $scope.isPlayingSong = true;
      };

      $scope.stopSong = function() {
        $scope.isPlayingSong = false;
        window.SongPlayer.stop();
      };

      $scope.abcMusicString = 'X: 2\nT: Twinkle Little Star\nR: reel\nM: 4/4\nL: 1/8\nK: Cmaj\nC2C2G2G2|A2A2G4|F2F2E2E2|D2D2C4|\nG2G2F2F2|E2E2D4|G2G2F2F2|E2E2D4|\nC2C2G2G2|A2A2G4|F2F2E2E2|D2D2C4:|';

    }
  ]);
