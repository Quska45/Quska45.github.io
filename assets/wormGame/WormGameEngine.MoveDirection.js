/*
3. 객체의 이동 방향을 나타내기 위한 enum
*/
WormGameEngine.MoveDirection = {
  right: {
    getNextPosition : function getNextPosition( wgObj ){
      var nextPosition = {};
      nextPosition.x = wgObj.position.x + 1;
      nextPosition.y = wgObj.position.y;
      return nextPosition;
    },
    moveNextPosition : function moveNextPosition( wgObj ){
      ++wgObj.position.x;
    },
    getPreviousPosition : function getPreviousPosition(){
      var self = this;
      var previousPosition = {x : self.position.x-1, y:self.position.y}
      return previousPosition;
    }
  }
  , left: {
    getNextPosition : function getNextPosition( wgObj ){
      var nextPosition = {};
      nextPosition.x = wgObj.position.x - 1;
      nextPosition.y = wgObj.position.y;
      return nextPosition;
    },
    moveNextPosition : function moveNextPosition( wgObj ){
      --wgObj.position.x;
    },
    getPreviousPosition : function getPreviousPosition(){
      var self = this;
      var previousPosition = {x : self.position.x+1, y:self.position.y}
      return previousPosition;
    }
  }
  , top: {
    getNextPosition : function getNextPosition( wgObj ){
      var nextPosition = {};
      nextPosition.x = wgObj.position.x;
      nextPosition.y = wgObj.position.y + 1;
      return nextPosition;
    },
    moveNextPosition : function moveNextPosition( wgObj ){
      ++wgObj.position.y;
    },
    getPreviousPosition : function getPreviousPosition(){
      var self = this;
      var previousPosition = {x : self.position.x, y:self.position.y-1}
      return previousPosition;
    }
  }
  , bottom: {
    getNextPosition : function getNextPosition( wgObj ){
      var nextPosition = {};
      nextPosition.x = wgObj.position.x;
      nextPosition.y = wgObj.position.y - 1;
      return nextPosition;
    },
    moveNextPosition : function moveNextPosition( wgObj ){
      --wgObj.position.y;
    },
    getPreviousPosition : function getPreviousPosition(){
      var self = this;
      var previousPosition = {x : self.position.x, y:self.position.y+1}
      return previousPosition;
    }
  }
};
