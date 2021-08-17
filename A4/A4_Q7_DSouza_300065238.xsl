<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" encoding="utf-8" indent="yes"/>
    <xsl:template match="/">
        <html>
            <head>
                <title>Question 7</title>
            </head>
            <body>
                <h1>
                    <xsl:text>Package: </xsl:text>
                    <xsl:value-of select="package/name"/>
                </h1>
                <table>
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Amount per <xsl:value-of select="package/servingSize"/></th>
                        </tr>
                    </thead>
                    <tr>
                        <td style="text-align: right">Total Calories</td>
                        <td>
                            <xsl:value-of select="package/calories/total"/>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align:right">Fat Calories</td>
                        <td>
                            <xsl:value-of select="package/calories/fat"/>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: right">Total fat</td>
                        <td>
                            <xsl:value-of select="package/fat/total"/>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: right">Saturated fat</td>
                        <td>
                            <xsl:value-of select="package/fat/saturated"/>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: right">Cholesterol</td>
                        <td>
                            <xsl:value-of select="package/cholesterol"/>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: right">Sodium</td>
                        <td>
                            <xsl:value-of select="package/sodium"/>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: right">Total carbs</td>
                        <td>
                            <xsl:value-of select="package/carbohydrates/total"/>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: right">Fiber carbs</td>
                        <td>
                            <xsl:value-of select="package/carbohydrates/fiber"/>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: right">Sugar carbs</td>
                        <td>
                            <xsl:value-of select="package/carbohydrates/sugars"/>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: right">Protein</td>
                        <td>
                            <xsl:value-of select="package/protein"/>
                        </td>
                    </tr>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>