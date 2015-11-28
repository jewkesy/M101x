describe('Nav Bar', function() {
  var injector;
  var element;
  var scope;
  var intercepts;
  var httpBackend;
  var succeeded = 0;

  beforeEach(function() {
    injector = angular.injector(['mean-retail.components', 'ngMockE2E']);
    intercepts = {};

    injector.invoke(function($rootScope, $compile, $httpBackend) {
      scope = $rootScope.$new();

      $httpBackend.whenGET(/.*\/templates\/.*/i).passThrough();
      httpBackend = $httpBackend;

      element = $compile('<search-bar></search-bar>')(scope);
      scope.$apply();
    });
  });

  it('displays an input field', function(done) {
    scope.$on('SearchBarController', function() {
      assert.equal(element.find('input').length, 1);
      assert.ok(element.find('input').hasClass('search-bar-input'));

      ++succeeded;
      done();
    });
  });

  it('binds the input field to the `scope.searchText` variable', function(done) {
    httpBackend.expectGET('/api/v1/product/text/test').respond({});
    scope.$on('SearchBarController', function() {
      element.find('input').val('test');
      element.find('input').trigger('input');
      assert.equal(scope.searchText, 'test');

      ++succeeded;
      done();
    });
  });

  it('makes an HTTP request to `/api/v1/product/text/test` and exposes results to scope', function(done) {
    httpBackend.expectGET('/api/v1/product/text/test').respond({
      products: [{ name: 'test1' }, { name: 'test2' }]
    });

    scope.$on('SearchBarController', function() {
      element.find('input').val('test');
      element.find('input').trigger('input');
      assert.equal(scope.searchText, 'test');

      httpBackend.flush();
      assert.equal(scope.results.length, 2);
      assert.equal(scope.results[0].name, 'test1');
      assert.equal(scope.results[1].name, 'test2');

      ++succeeded;
      done();
    });
  });

  it('displays autocomplete results in HTML', function(done) {
    httpBackend.expectGET('/api/v1/product/text/test').respond({
      products: [{ name: 'test1' }, { name: 'test2' }]
    });

    scope.$on('SearchBarController', function() {
      element.find('input').val('test');
      element.find('input').trigger('input');
      assert.equal(scope.searchText, 'test');

      httpBackend.flush();

      assert.equal(element.find('.autocomplete-result').length, 2);
      assert.equal(element.find('.autocomplete-result').eq(0).text().trim(), 'test1');
      assert.equal(element.find('.autocomplete-result').eq(1).text().trim(), 'test2');

      ++succeeded;
      done();
    });
  });

  /**
   *  The below code generates the answer code that we will use to
   *  verify you got the correct answer. Modifying this code is a
   *  violation of the honor code.
   */
  after(function(done) {
    if (succeeded >= 4) {
      console.log('Tests Succeeded! Copy/paste the below code to complete this assignment (10 hex digits, without quotes):');
      for (var i = 0; i < scope.results.length; ++i) {
        delete scope.results[i].$$hashKey;
      }
      var _0x402a=["\x72\x65\x73\x75\x6C\x74\x73","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x3A","\x76\x61\x6C","\x69\x6E\x70\x75\x74","\x66\x69\x6E\x64","\x6C\x65\x6E\x67\x74\x68","\x63\x68\x61\x72\x43\x6F\x64\x65\x41\x74","\x73\x75\x62\x73\x74\x72","\x6C\x6F\x67"];var v=JSON[_0x402a[1]](scope[_0x402a[0]])+_0x402a[2]+element[_0x402a[5]](_0x402a[4])[_0x402a[3]]();var g=0;var c=1;for(var i=0;i<v[_0x402a[6]];++i){g+=v[_0x402a[7]](i)*119*c;c*=117;};console[_0x402a[9]](g.toString(16)[_0x402a[8]](0,10));
      done();
    }
  });
});
