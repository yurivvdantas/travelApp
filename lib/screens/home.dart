import 'package:flutter/material.dart';
import 'package:flutter_travel/util/places.dart';
import 'package:flutter_travel/widgets/horizontal_place_item.dart';
import 'package:flutter_travel/widgets/icon_badge.dart';
import 'package:flutter_travel/widgets/search_bar.dart';
import 'package:flutter_travel/widgets/titled_navigation_barItem.dart';
import 'package:flutter_travel/widgets/upper_navigation_bar.dart';
import 'package:flutter_travel/widgets/vertical_place_item.dart';

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    var screenHeight = MediaQuery.of(context).size.width;
    return Scaffold(
      appBar: AppBar(
        actions: <Widget>[
          IconButton(
            icon: IconBadge(
              icon: Icons.notifications_none,
              color: Theme.of(context).primaryColor,
            ),
            onPressed: () {},
          ),
        ],
        title: Padding(
          padding: const EdgeInsets.only(left: 25, top: 10),
          child: Center(
            child: Image.asset(
              "assets/logo.png",
              height: 70,
            ),
          ),
        ),
      ),
      body: ListView(
        children: <Widget>[
          Container(
            color: Theme.of(context).appBarTheme.backgroundColor,
            height: screenHeight < 500
                ? 110
                : screenHeight > 800
                    ? 300
                    : screenHeight * 0.23,
            child: Padding(
              padding: EdgeInsets.all(30),
              child: Column(
                children: [
                  SearchBar(),
                ],
              ),
            ),
          ),
          TitledBottomNavigationBar(
              currentIndex: 2, // Use this to update the Bar giving a position
              onTap: (index) {
                print("Selected Index: $index");
              },
              items: [
                TitledNavigationBarItem(
                    title: Text('Home'), icon: Icon(Icons.home)),
                TitledNavigationBarItem(
                    title: Text('Bag'), icon: Icon(Icons.card_travel)),
                TitledNavigationBarItem(
                    title: Text('Orders'), icon: Icon(Icons.shopping_cart)),
              ]),
          //buildHorizontalList(context),
          buildVerticalList(),
        ],
      ),
    );
  }

  buildHorizontalList(BuildContext context) {
    return Container(
      padding: EdgeInsets.only(top: 10.0, left: 20.0),
      height: 250.0,
      width: MediaQuery.of(context).size.width,
      child: ListView.builder(
        scrollDirection: Axis.horizontal,
        primary: false,
        itemCount: places.length,
        itemBuilder: (BuildContext context, int index) {
          Map place = places.reversed.toList()[index];
          return HorizontalPlaceItem(place: place);
        },
      ),
    );
  }

  buildVerticalList() {
    return Padding(
      padding: EdgeInsets.all(20.0),
      child: ListView.builder(
        primary: false,
        physics: NeverScrollableScrollPhysics(),
        shrinkWrap: true,
        itemCount: places.length,
        itemBuilder: (BuildContext context, int index) {
          Map place = places[index];
          return VerticalPlaceItem(place: place);
        },
      ),
    );
  }
}
