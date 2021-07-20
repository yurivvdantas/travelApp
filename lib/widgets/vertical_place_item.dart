import 'package:flutter/material.dart';

import '../screens/details.dart';

class VerticalPlaceItem extends StatelessWidget {
  final Map place;

  VerticalPlaceItem({required this.place});

  @override
  Widget build(BuildContext context) {
    return Card(
      margin: EdgeInsets.all(10),
      elevation: 20,
      child: Padding(
        padding: const EdgeInsets.all(10),
        child: InkWell(
          child: Container(
            height: 150.0,
            child: Row(
              children: <Widget>[
                ClipRRect(
                  borderRadius: BorderRadius.circular(5),
                  child: Image.asset(
                    "${place["img"]}",
                    height: 120.0,
                    width: 150.0,
                    fit: BoxFit.cover,
                  ),
                ),
                SizedBox(width: 25.0),
                Container(
                  height: 100.0,
                  width: 200,
                  child: ListView(
                    primary: false,
                    physics: NeverScrollableScrollPhysics(),
                    shrinkWrap: true,
                    children: <Widget>[
                      Container(
                        alignment: Alignment.centerLeft,
                        child: Text(
                          "${place["name"]}",
                          style: TextStyle(
                            fontWeight: FontWeight.w700,
                            fontSize: 14.0,
                          ),
                          maxLines: 2,
                          textAlign: TextAlign.left,
                        ),
                      ),
                      SizedBox(height: 3.0),
                      Row(
                        children: <Widget>[
                          Icon(
                            Icons.location_on,
                            size: 13.0,
                            color: Colors.blueGrey[300],
                          ),
                          SizedBox(width: 3.0),
                          Container(
                            alignment: Alignment.centerLeft,
                            child: Text(
                              "${place["location"]}",
                              style: TextStyle(
                                fontWeight: FontWeight.bold,
                                fontSize: 13.0,
                                color: Colors.blueGrey[300],
                              ),
                              maxLines: 1,
                              textAlign: TextAlign.left,
                            ),
                          ),
                        ],
                      ),
                      SizedBox(height: 10.0),
                      Container(
                        alignment: Alignment.centerLeft,
                        child: Text(
                          "${place["price"]}",
                          style: TextStyle(
                            fontWeight: FontWeight.bold,
                            fontSize: 16.0,
                          ),
                          maxLines: 1,
                          textAlign: TextAlign.left,
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
          onTap: () {
            Navigator.of(context).push(
              MaterialPageRoute(
                builder: (BuildContext context) {
                  return Details();
                },
              ),
            );
          },
        ),
      ),
    );
  }
}
